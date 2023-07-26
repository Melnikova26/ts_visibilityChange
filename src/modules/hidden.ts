export default function hidden(): Promise<boolean> {
  return new Promise(function (resolve) {
    const hidden: boolean = document.hidden;
    if (hidden) {
      resolve(true);
      return;
    }
    const gethidden = () => {
      document.removeEventListener("visibilitychange", gethidden);
      resolve(true);
    };
    document.addEventListener("visibilitychange", gethidden);
  });
}
