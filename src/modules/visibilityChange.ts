export default function visibilityChange(): Promise<boolean> {
  return new Promise(function (resolve) {
    const getVisibilityChange = () => {
      document.removeEventListener("visibilitychange", getVisibilityChange);
      const visible: boolean = !document.hidden;
      resolve(visible);
    };
    document.addEventListener("visibilitychange", getVisibilityChange);
  });
}
