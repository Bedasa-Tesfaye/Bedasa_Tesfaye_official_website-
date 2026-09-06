import { CATEGORY_LIST } from "./productCategories";

export default CATEGORY_LIST.map((category) => ({
  type: category.name.split(" ")[0].toUpperCase(),
  icon: category.icon,
  title: category.name,
  text: category.shortDescription,
  route: category.route,
  items:
    category.slug === "cctv"
      ? ["Indoor & outdoor cameras", "Remote-viewing ready"]
      : category.slug === "access-attendance"
        ? ["Fingerprint & card readers", "Setup and staff enrollment"]
        : category.slug === "networking"
          ? ["Stable office Wi-Fi", "Network design & setup"]
          : ["Business-ready equipment", "Installation & user guidance"],
}));
