import React from 'react';

function Canada() {
  return <h1 className="text-xl font-bold">Canadian</h1>;
}

function Camping() {
  return <h1 className="text-xl font-bold">Camping</h1>;
}

function HoverableEmoji({
  emoji,
  children,
  delay,
  setInfo,
}: {
  emoji: string;
  children: React.ReactNode;
  delay: string;
  setInfo: (info: React.ReactNode) => void;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span
      className="relative group cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        setInfo(children);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setInfo(null);
      }}
    >
      <span
        className={`text-5xl transition duration-100 ease-in-out filter ${isHovered ? 'grayscale-0' : 'grayscale-[60%]'
          }`}
        style={{
          animation: isHovered ? 'none' : `beckon 2s ease-in-out infinite`,
          animationDelay: delay,
        }}
        role="img"
        aria-label="emoji"
      >
        {emoji}
      </span>
    </span>
  );
}

export default function Icons(props: { setInfo: (info: React.ReactNode) => void }) {
  let delay = 0;

  const icons = [
    { emoji: "🇨🇦", info: <Canada /> },
    { emoji: "🏕️", info: <Camping /> },
    { emoji: "☕️", info: <Camping /> },
    { emoji: "💻", info: <Canada /> },
    { emoji: "🤿", info: <Canada /> },
    { emoji: "🍻", info: <Canada /> },
    { emoji: "🛶", info: <Canada /> },
    { emoji: "🚴", info: <Canada /> },
    { emoji: "🔭", info: <Canada /> },
    { emoji: "🎬", info: <Canada /> },
    { emoji: "🥋", info: <Canada /> },
    { emoji: "🎸", info: <Canada /> },
  ].map(({ emoji, info }) => {
    const delayValue = `${delay}s`;
    delay += 0.2;
    return (
      <HoverableEmoji setInfo={props.setInfo} key={emoji} emoji={emoji} delay={delayValue}>
        {info}
      </HoverableEmoji>
    );
  });

  return <div className="flex flex-wrap gap-2">{icons}</div>;
}
