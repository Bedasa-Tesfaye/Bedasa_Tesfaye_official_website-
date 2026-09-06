export const PRODUCT_CATEGORIES = {
  cctv: {
    id: "cctv",
    slug: "cctv",
    name: "CCTV & Surveillance",
    route: "/products/cctv",
    icon: "fa-video",
    shortDescription:
      "IP and analog cameras, DVR/NVR recorders, storage, and installation accessories for homes, offices, and facilities.",
    seoTitle: "CCTV & Surveillance Products | Michu Technology Solutions",
    seoDescription:
      "Browse CCTV cameras, DVR/NVR systems, storage, PoE switches, and surveillance accessories. Supply, installation, and configuration in Ethiopia.",
    filters: [
      { id: "all", label: "All" },
      { id: "ip-cameras", label: "IP Cameras" },
      { id: "analog-cameras", label: "Analog Cameras" },
      { id: "dvr-nvr", label: "DVR/NVR" },
      { id: "accessories", label: "Accessories" },
    ],
  },
  "access-attendance": {
    id: "access-attendance",
    slug: "access-attendance",
    name: "Access & Attendance",
    route: "/products/access-attendance",
    icon: "fa-fingerprint",
    shortDescription:
      "Biometric attendance devices, access readers, locks, cards, and practical entry-control systems.",
    seoTitle: "Access & Attendance Products | Michu Technology Solutions",
    seoDescription:
      "Fingerprint and face recognition attendance, door access control, RFID readers, locks, and installation support in Ethiopia.",
    filters: [
      { id: "all", label: "All" },
      { id: "attendance", label: "Attendance" },
      { id: "access-control", label: "Access Control" },
      { id: "locks", label: "Locks" },
      { id: "accessories", label: "Accessories" },
    ],
  },
  networking: {
    id: "networking",
    slug: "networking",
    name: "Networking Equipment",
    route: "/products/networking",
    icon: "fa-network-wired",
    shortDescription:
      "Routers, switches, wireless access points, structured cabling, and connectivity accessories.",
    seoTitle: "Networking Equipment | Michu Technology Solutions",
    seoDescription:
      "Network switches, routers, Wi-Fi access points, cabling, fiber equipment, and professional networking installation in Ethiopia.",
    filters: [
      { id: "all", label: "All" },
      { id: "switches", label: "Switches" },
      { id: "routers", label: "Routers" },
      { id: "wifi", label: "Wi-Fi" },
      { id: "cabling", label: "Cabling" },
      { id: "fiber", label: "Fiber" },
      { id: "accessories", label: "Accessories" },
    ],
  },
  computers: {
    id: "computers",
    slug: "computers",
    name: "Computers & Accessories",
    route: "/products/computers",
    icon: "fa-laptop",
    shortDescription:
      "Laptops, desktops, printers, UPS units, storage, and everyday accessories for productive workspaces.",
    seoTitle: "Computers & Accessories | Michu Technology Solutions",
    seoDescription:
      "Desktop and laptop computers, monitors, printers, UPS, storage, peripherals, and IT setup support in Ethiopia.",
    filters: [
      { id: "all", label: "All" },
      { id: "computers", label: "Computers" },
      { id: "laptops", label: "Laptops" },
      { id: "monitors", label: "Monitors" },
      { id: "storage", label: "Storage" },
      { id: "peripherals", label: "Peripherals" },
      { id: "accessories", label: "Accessories" },
    ],
  },
};

export const CATEGORY_LIST = Object.values(PRODUCT_CATEGORIES);

export function getCategoryBySlug(slug) {
  return CATEGORY_LIST.find((category) => category.slug === slug) || null;
}

export default PRODUCT_CATEGORIES;
