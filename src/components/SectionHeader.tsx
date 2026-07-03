export default function SectionHeader({ cmd, label }: { cmd: string; label: string }) {
  return (
    <>
      <div className="sec-cmd">
        <span className="arrow">❯</span>
        <span className="cmd-text">{cmd}</span>
      </div>
      <div className="sec-label"># {label}</div>
    </>
  );
}
