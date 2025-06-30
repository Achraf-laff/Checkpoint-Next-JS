import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to My Portfolio</h1>
      <Image src="/profile.jpg" alt="My Photo" width={200} height={200} />
      <p>Hi! I am a web developer passionate about building modern websites.</p>
    </div>
  );
}

