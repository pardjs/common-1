export const sleep = (ms: number) => {
  const now = +new Date();
  let timer: NodeJS.Timeout;
  return new Promise((resolve, reject) => {
    timer = setInterval(() => {
      if (now + ms < +new Date()) {
        clearInterval(timer);
        resolve(true);
      }
    }, 10);
  });
};
