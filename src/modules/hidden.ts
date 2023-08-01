export default function hidden(): Promise<boolean> {
  return new Promise(function (resolve) {
    const gethidden = () => {
      if (document.hidden) {
        resolve(true);
      }
    };
    document.addEventListener("visibilitychange", gethidden);
  });
}
