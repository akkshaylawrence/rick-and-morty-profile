export const statusColors = (status: string): string => {
  switch (status) {
    case "Alive":
      return "bg-green-200 text-green-700";
    case "Dead":
      return "bg-red-200 text-red-700";
    default:
      return "bg-gray-200 text-gray-700";
  }
};
