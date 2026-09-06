export function generateRequestId() {
  const year = new Date().getFullYear();
  const suffix = String(Math.floor(Math.random() * 90000) + 10000);
  return `MTS-${year}-${suffix}`;
}

export default generateRequestId;
