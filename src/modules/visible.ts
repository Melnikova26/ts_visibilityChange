export default function visible(): Promise<boolean> {
  return new Promise(function (resolve) {
    const getVisibile = () => {
      if (!document.hidden) {
        resolve(true);
      }
    };
    document.addEventListener("visibilitychange", getVisibile);
  });
}
