export default function visible(): Promise<boolean> {
  return new Promise(function (resolve) {
    const visible: boolean = !document.hidden;
    if (visible) {
      resolve(true);
      return;
    }
    const getVisibile = () => {
      document.removeEventListener("visibilitychange", getVisibile);
      resolve(true);
    };
    document.addEventListener("visibilitychange", getVisibile);
  });
}
