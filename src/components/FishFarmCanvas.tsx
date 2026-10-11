import React, { useState, useEffect, useRef } from 'react';
import { Activity, Droplets, Thermometer, Gauge, Disc, Play, Pause, RotateCcw } from 'lucide-react';

interface SensorNode {
  id: string;
  name: string;
  type: string;
  value: string;
  status: 'optimal' | 'monitoring' | 'active';
  pin: string;
  detail: string;
}

export const FishFarmCanvas: React.FC = () => {
  const [activeSensor, setActiveSensor] = useState<string>('ph');
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [dispenseCount, setDispenseCount] = useState<number>(1);
  const [isDispensing, setIsDispensing] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sensors: SensorNode[] = [
    {
      id: 'ph',
      name: 'pH Sensor Probe',
      type: 'Water Chemistry',
      value: '7.2 pH',
      status: 'optimal',
      pin: 'Analog Pin A0',
      detail: 'Monitors water acidity/alkalinity thresholds to ensure a healthy aquatic biological environment.'
    },
    {
      id: 'turbidity',
      name: 'Optical Turbidity Sensor',
      type: 'Water Clarity',
      value: '14 NTU',
      status: 'optimal',
      pin: 'Analog Pin A1',
      detail: 'Measures suspended particulates in water using infrared optical transmission to detect sludge.'
    },
    {
      id: 'temp',
      name: 'DS18B20 Digital Temp Probe',
      type: 'Thermal Monitoring',
      value: '26.4 °C',
      status: 'optimal',
      pin: 'Digital Pin D2 (One-Wire)',
      detail: 'Submersible waterproof digital probe providing accurate water temperature readings.'
    },
    {
      id: 'feed',
      name: 'HX711 & Load Cell Dispenser',
      type: 'Feed Measurement',
      value: '25.0 g / cycle',
      status: 'active',
      pin: 'Pins D4, D5 (HX711) + D9 (Servo)',
      detail: 'Measures exact preset feed mass before servo gate opens, preventing overfeeding and water fouling.'
    }
  ];

  // Trigger simulated feed cycle
  const triggerDispense = () => {
    if (isDispensing) return;
    setIsDispensing(true);
    setTimeout(() => {
      setDispenseCount((prev) => prev + 1);
      setIsDispensing(false);
    }, 1800);
  };

  // Canvas visual rendering for animated water depth, bubbles, and fish trajectories
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    // Simulated fish objects
    const fishList = [
      { x: 50, y: 120, vx: 0.8, color: '#38bdf8', size: 10 },
      { x: 180, y: 160, vx: -0.6, color: '#818cf8', size: 8 },
      { x: 100, y: 200, vx: 1.1, color: '#00f0ff', size: 11 },
      { x: 260, y: 110, vx: -0.9, color: '#c084fc', size: 9 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Water gradient background
      const waterGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      waterGrad.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      waterGrad.addColorStop(0.5, 'rgba(15, 23, 42, 0.4)');
      waterGrad.addColorStop(1, 'rgba(2, 6, 23, 0.8)');
      ctx.fillStyle = waterGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated wave surface
      ctx.beginPath();
      ctx.moveTo(0, 45);
      for (let x = 0; x <= canvas.width; x += 10) {
        const y = 45 + Math.sin((x * 0.03) + (t * 0.05)) * 6;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = 'rgba(14, 165, 233, 0.08)';
      ctx.fill();

      // Draw floating bubbles
      for (let i = 0; i < 12; i++) {
        const bx = (i * 35 + Math.sin(t * 0.02 + i) * 15) % canvas.width;
        const by = (canvas.height - ((t * 1.2 + i * 28) % canvas.height));
        ctx.beginPath();
        ctx.arc(bx, by, 2 + (i % 3), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.fill();
      }

      // Draw swimming fish silhouettes
      fishList.forEach((fish) => {
        if (isSimulating) {
          fish.x += fish.vx;
          if (fish.x > canvas.width + 20) fish.x = -20;
          if (fish.x < -20) fish.x = canvas.width + 20;
        }

        ctx.save();
        ctx.translate(fish.x, fish.y + Math.sin(t * 0.05 + fish.x * 0.02) * 5);
        if (fish.vx < 0) ctx.scale(-1, 1);

        // Body
        ctx.beginPath();
        ctx.ellipse(0, 0, fish.size, fish.size * 0.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = fish.color;
        ctx.shadowColor = fish.color;
        ctx.shadowBlur = 6;
        ctx.fill();

        // Tail
        ctx.beginPath();
        ctx.moveTo(-fish.size * 0.8, 0);
        ctx.lineTo(-fish.size * 1.5, -fish.size * 0.4);
        ctx.lineTo(-fish.size * 1.5, fish.size * 0.4);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      });

      // Feed dispenser animation when dispensing
      if (isDispensing) {
        ctx.save();
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = '#fbbf24';
        ctx.shadowBlur = 8;
        for (let p = 0; p < 8; p++) {
          const px = (canvas.width / 2) + Math.sin(p + t * 0.2) * 20;
          const py = 50 + ((t * 4 + p * 20) % 180);
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      t += 0.8;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isSimulating, isDispensing]);

  const selectedSensor = sensors.find((s) => s.id === activeSensor) || sensors[0];

  return (
    <div className="w-full bg-slate-900/90 rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Simulation Header */}
      <div className="px-4 sm:px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
          <h4 className="text-sm sm:text-base font-semibold text-white tracking-wide flex items-center gap-2">
            Aquaculture IoT Telemetry Visualizer
            <span className="text-[10px] font-mono uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 px-2 py-0.5 rounded-full">
              Arduino UNO R3 Logic
            </span>
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title="Toggle simulation animation"
          >
            {isSimulating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isSimulating ? 'Pause' : 'Resume'}
          </button>
          <button
            onClick={triggerDispense}
            disabled={isDispensing}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
              isDispensing
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-wait'
                : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/50'
            }`}
          >
            <Disc className={`w-3.5 h-3.5 ${isDispensing ? 'animate-spin' : ''}`} />
            {isDispensing ? 'Dispensing Feed...' : 'Trigger Servo Feed'}
          </button>
        </div>
      </div>

      {/* Main visual panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Canvas Tank View */}
        <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[300px] border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950 flex flex-col justify-between p-4">
          <canvas
            ref={canvasRef}
            width={480}
            height={300}
            className="w-full h-full object-cover rounded-xl border border-slate-800/80"
          />

          {/* Interactive Floating Sensor Markers */}
          <div className="absolute top-8 left-8 flex flex-col gap-2">
            <span className="text-[11px] font-mono text-cyan-400 bg-slate-950/90 px-2.5 py-1 rounded-md border border-cyan-500/30 shadow-md">
              Tank 01 &bull; Freshwater Bio-Cluster
            </span>
          </div>

          {/* Servo Dispenser Status Overlay */}
          <div className="absolute top-8 right-8 bg-slate-950/90 px-3 py-1.5 rounded-lg border border-amber-500/40 text-[11px] font-mono text-amber-300 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isDispensing ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
            Servo Gate: {isDispensing ? 'OPENING (HX711 Active)' : 'STANDBY (Closed)'}
          </div>

          {/* Feed Cycle Counter */}
          <div className="absolute bottom-6 left-8 bg-slate-950/85 px-3 py-1 rounded-md border border-slate-800 text-[11px] text-slate-400 font-mono">
            Dispense Cycles Completed: <strong className="text-white">{dispenseCount}</strong>
          </div>
        </div>

        {/* Telemetry Sensor Dashboard */}
        <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between bg-slate-900/60">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
              Select Sensor to Inspect Circuit & Role:
            </span>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {sensors.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSensor(s.id)}
                  className={`text-left p-2.5 rounded-xl border transition-all ${
                    activeSensor === s.id
                      ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-neon-blue'
                      : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                  }`}
                >
                  <div className="text-[11px] font-mono text-slate-400 truncate">{s.type}</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5 truncate">{s.name}</div>
                  <div className="text-sm font-bold text-cyan-300 font-mono mt-1">{s.value}</div>
                </button>
              ))}
            </div>

            {/* Selected Sensor Deep Dive Card */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  {selectedSensor.name}
                </span>
                <span className="text-[10px] font-mono text-violet-300 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-800/50">
                  {selectedSensor.pin}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedSensor.detail}
              </p>
            </div>
          </div>

          {/* Academic Prototype Transparency Disclaimer */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 leading-normal flex items-start gap-2">
            <span className="text-cyan-400 font-bold">&bull;</span>
            <span>
              <strong>Hardware Transparency:</strong> Conceptual 3D interactive simulation illustrating the Arduino UNO R3 sensor logic and servo gating mechanism designed for the academic IoT project.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
