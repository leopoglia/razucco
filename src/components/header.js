import Chat from "./chat";

export default function Header() {

  return (
    <header className="header w-full flex items-center justify-center p-8 dark:bg-black">
      <img className="w-16 h-16 rounded-lg p-1 bg-black" src="/imgs/logo.png" alt="" />
    </header>
  );
}