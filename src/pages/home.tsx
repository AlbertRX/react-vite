export default function Home() {
  const onClick = () => {
    window.location.href = '/test';
  };
  return (
    <div>
      <button onClick={onClick}>测试跳转</button>
    </div>
  );
}
