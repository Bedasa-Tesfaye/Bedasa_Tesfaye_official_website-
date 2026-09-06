const DEFAULTS = {
  availability: "Available on request",
  price: null,
  installationSupport:
    "Supply, installation, and configuration available through Michu Technology Solutions.",
};

function createProduct(data) {
  const image = data.image || `/images/products/${data.category}/${data.id.replace(`${data.category}-`, "")}.jpg`;

  return {
    ...DEFAULTS,
    ...data,
    image,
    images: data.images || [image],
    keywords: data.keywords || [],
    applications: data.applications || [],
    features: data.features || [],
    specifications: data.specifications || {},
    description:
      data.description ||
      `${data.shortDescription} Michu Technology Solutions helps customers in Ethiopia select the right equipment, install it properly, and configure it for reliable daily use.`,
  };
}

const CCTV_PRODUCTS = [
  ["ip-security-camera", "IP Security Camera", "Network Camera", "ip-cameras", "Network-based security cameras for modern CCTV systems with remote viewing capability.", ["Remote viewing support", "PoE connectivity options", "Suitable for office and commercial use"], { resolution: "2MP / 4MP / 5MP options", nightVision: "Available depending on model", connectivity: "PoE / Ethernet", weatherProtection: "Indoor and outdoor models available" }, ["Office surveillance", "Retail monitoring", "Warehouse security"], ["ip", "camera", "poe", "network", "cctv", "security"]],
  ["analog-hd-camera", "Analog HD Camera", "HD Analog Camera", "analog-cameras", "High-definition analog cameras for cost-effective CCTV installations.", ["Compatible with DVR systems", "Reliable wired transmission", "Indoor and outdoor options"], { resolution: "1080p / 4MP options", nightVision: "Available depending on model", connectivity: "Coax / BNC", weatherProtection: "Model dependent" }, ["Small business CCTV", "Home security", "Existing analog upgrades"], ["analog", "hd", "camera", "cctv", "dvr"]],
  ["dome-camera", "Dome Camera", "Dome Camera", "ip-cameras", "Discreet dome-style cameras suitable for indoor ceilings and covered outdoor areas.", ["Compact design", "Wide coverage options", "Vandal-resistant models available"], { formFactor: "Dome", mounting: "Ceiling / wall", nightVision: "Available depending on model", connectivity: "IP or analog depending on model" }, ["Offices", "Shops", "Reception areas"], ["dome", "camera", "indoor", "cctv"]],
  ["bullet-camera", "Bullet Camera", "Bullet Camera", "ip-cameras", "Directional bullet cameras designed for perimeter and outdoor monitoring.", ["Long-range coverage options", "Weather-resistant housings", "Visible deterrent design"], { formFactor: "Bullet", mounting: "Wall / pole", nightVision: "Available depending on model", weatherProtection: "Outdoor rated models available" }, ["Perimeter monitoring", "Parking areas", "Building exteriors"], ["bullet", "camera", "outdoor", "cctv"]],
  ["ptz-camera", "PTZ Camera", "PTZ Camera", "ip-cameras", "Pan-tilt-zoom cameras for active monitoring of large areas.", ["Remote pan, tilt, and zoom control", "Ideal for wide-area coverage", "Central monitoring friendly"], { movement: "Pan / tilt / zoom", control: "Remote control capable", connectivity: "IP / PoE depending on model", coverage: "Wide area monitoring" }, ["Large halls", "Warehouses", "Open commercial spaces"], ["ptz", "camera", "zoom", "cctv"]],
  ["indoor-camera", "Indoor Camera", "Indoor Camera", "ip-cameras", "Cameras designed for indoor environments such as offices, shops, and reception areas.", ["Compact installation", "Clear indoor monitoring", "Multiple mounting options"], { environment: "Indoor", mounting: "Ceiling / wall", nightVision: "Available depending on model", connectivity: "IP or analog depending on model" }, ["Office monitoring", "Retail interiors", "Indoor corridors"], ["indoor", "camera", "cctv"]],
  ["outdoor-camera", "Outdoor Camera", "Outdoor Camera", "ip-cameras", "Weather-resistant cameras built for outdoor surveillance applications.", ["Outdoor-rated housings", "Reliable day and night monitoring", "Perimeter coverage"], { environment: "Outdoor", weatherProtection: "Weather-resistant models available", nightVision: "Available depending on model", mounting: "Wall / pole" }, ["Gate areas", "Building perimeters", "Outdoor assets"], ["outdoor", "camera", "weatherproof", "cctv"]],
  ["dvr", "DVR", "Digital Video Recorder", "dvr-nvr", "Digital video recorders for analog and HD analog CCTV camera systems.", ["Local recording", "Playback and export support", "Multiple channel options"], { channels: "4 / 8 / 16 / 32 depending on model", storage: "HDD support", connectivity: "HDMI / network options depending on model", recording: "Continuous and motion-based options" }, ["Analog CCTV systems", "Small business recording", "Existing system upgrades"], ["dvr", "recorder", "cctv", "analog"]],
  ["nvr", "NVR", "Network Video Recorder", "dvr-nvr", "Network video recorders for IP camera systems with scalable storage.", ["IP camera management", "Remote access options", "Expandable storage support"], { channels: "4 / 8 / 16 / 32 depending on model", storage: "HDD support", connectivity: "Ethernet / PoE options depending on model", recording: "Continuous and event-based options" }, ["IP CCTV systems", "Office surveillance", "Multi-site monitoring"], ["nvr", "recorder", "ip", "cctv"]],
  ["cctv-hard-drive", "CCTV Hard Drive", "Surveillance HDD", "accessories", "Hard drives optimized for continuous CCTV recording workloads.", ["Designed for 24/7 recording", "Compatible with DVR/NVR systems", "Multiple capacity options"], { usage: "Surveillance recording", capacity: "1TB to 10TB+ depending on model", compatibility: "DVR / NVR systems", interface: "SATA" }, ["DVR/NVR storage expansion", "New CCTV installations", "Recording upgrades"], ["hdd", "hard drive", "storage", "cctv", "dvr", "nvr"]],
  ["poe-switch-cctv", "PoE Switch for CCTV", "PoE Network Switch", "accessories", "Power-over-Ethernet switches to simplify IP camera installation and cabling.", ["Powers compatible IP cameras", "Reduces separate power cabling", "Multiple port options"], { poeSupport: "PoE / PoE+ depending on model", ports: "4 / 8 / 16 / 24 depending on model", speed: "Fast Ethernet / Gigabit depending on model", mounting: "Desktop / rack mount options" }, ["IP CCTV installations", "Office networks with cameras", "Structured cabling projects"], ["poe", "switch", "cctv", "network"]],
  ["cctv-power-supply", "CCTV Power Supply", "Power Supply Unit", "accessories", "Centralized power supplies for analog and hybrid CCTV camera systems.", ["Multi-channel output options", "Stable camera power delivery", "Cabinet and wall-mount options"], { outputs: "4 / 8 / 16 / 32 depending on model", voltage: "12V DC typical for analog systems", protection: "Overload protection depending on model", mounting: "Box / rack options" }, ["Analog CCTV systems", "Multi-camera installations", "Power distribution"], ["power", "supply", "cctv", "12v"]],
  ["video-balun", "Video Balun", "Video Balun", "accessories", "Baluns for transmitting video signals over structured cabling in CCTV systems.", ["Extends camera cabling flexibility", "Supports coax-to-twisted-pair conversion", "Useful in retrofit installations"], { type: "Passive / active depending on model", transmission: "Coax / UTP", distance: "Model dependent", compatibility: "Analog CCTV systems" }, ["Long cable runs", "Structured cabling projects", "System upgrades"], ["balun", "video", "cctv", "cable"]],
  ["cctv-cables", "CCTV Cables", "CCTV Cable", "accessories", "Cables for connecting cameras, recorders, and power components in CCTV systems.", ["Coax and network cable options", "Indoor and outdoor routing options", "Available in custom lengths"], { types: "Coax / UTP / FTP depending on requirement", connectors: "BNC / RJ45 depending on system", usage: "Camera to DVR/NVR/power", length: "Custom length on request" }, ["New installations", "Camera replacements", "System maintenance"], ["cable", "coax", "cctv", "wiring"]],
  ["bnc-connectors", "BNC Connectors", "BNC Connector", "accessories", "Connectors for analog CCTV camera and coax cabling terminations.", ["Reliable coax connections", "Compatible with standard CCTV cabling", "Available in multiple pack sizes"], { type: "BNC", usage: "Analog camera connections", compatibility: "Coax CCTV systems", finish: "Crimp / compression options" }, ["Analog CCTV installation", "Cable repairs", "Camera replacements"], ["bnc", "connector", "coax", "cctv"]],
  ["camera-mounts", "Camera Mounts", "Camera Mount", "accessories", "Mounting brackets and accessories for secure camera installation.", ["Wall, ceiling, and pole options", "Adjustable positioning", "Indoor and outdoor use"], { mounting: "Wall / ceiling / pole / corner", material: "Metal / durable polymer depending on model", compatibility: "Multiple camera form factors", adjustment: "Fixed / adjustable options" }, ["Camera installation", "Repositioning", "Outdoor mounting"], ["mount", "bracket", "camera", "cctv"]],
  ["cctv-accessories", "CCTV Accessories", "CCTV Accessory Kit", "accessories", "Supporting accessories for complete CCTV system installation and maintenance.", ["Connectors, boxes, and installation aids", "Useful for professional installations", "Available based on project requirements"], { includes: "Project dependent", usage: "Installation and maintenance", compatibility: "Analog and IP systems", availability: "Available on request" }, ["Installations", "Maintenance", "System expansion"], ["accessories", "cctv", "installation"]],
].map(([slug, name, type, subcategory, shortDescription, features, specifications, applications, keywords]) =>
  createProduct({
    id: `cctv-${slug}`,
    category: "cctv",
    subcategory,
    name,
    type,
    shortDescription,
    features,
    specifications,
    applications,
    keywords,
  })
);

const ACCESS_PRODUCTS = [
  ["fingerprint-attendance", "Fingerprint Attendance Machine", "Biometric Attendance Terminal", "attendance", "Fingerprint-based attendance terminals for employee time tracking.", ["Accurate staff check-in/out", "Report export options", "Suitable for offices and organizations"], { verification: "Fingerprint", capacity: "User capacity depends on model", connectivity: "USB / network options depending on model", reporting: "Attendance logs and export options" }, ["Office attendance", "Workforce tracking", "HR reporting"], ["fingerprint", "attendance", "biometric", "time"]],
  ["face-recognition-attendance", "Face Recognition Attendance Machine", "Face Recognition Terminal", "attendance", "Contactless face recognition attendance systems for modern workplaces.", ["Touchless check-in", "Fast recognition at entry points", "Suitable for high-traffic areas"], { verification: "Face recognition", capacity: "User capacity depends on model", connectivity: "Network / standalone options", reporting: "Attendance logs and export options" }, ["Modern offices", "Contactless entry", "Staff attendance"], ["face", "recognition", "attendance", "biometric"]],
  ["rfid-card-attendance", "RFID/Card Attendance System", "Card Attendance Terminal", "attendance", "Card-based attendance systems for quick employee check-in and check-out.", ["RFID/card-based authentication", "Easy staff onboarding", "Suitable for medium organizations"], { verification: "RFID / card", capacity: "User capacity depends on model", connectivity: "Standalone / network options", cards: "RFID cards supported" }, ["Office attendance", "Factory check-in", "Staff tracking"], ["rfid", "card", "attendance"]],
  ["door-access-controller", "Door Access Controller", "Access Control Panel", "access-control", "Central controllers for managing doors, readers, and access permissions.", ["Multi-door management", "Flexible permission control", "Integration with readers and locks"], { doors: "1 / 2 / 4+ depending on model", connectivity: "TCP/IP / Wiegand depending on model", users: "Capacity depends on model", integration: "Readers, locks, and sensors" }, ["Office access", "Restricted areas", "Multi-door control"], ["access", "controller", "door", "security"]],
  ["fingerprint-access-control", "Fingerprint Access Control", "Fingerprint Reader", "access-control", "Fingerprint readers for secure door access control.", ["Biometric door authentication", "Reduces unauthorized entry", "Suitable for offices and facilities"], { verification: "Fingerprint", mounting: "Wall mount", connectivity: "Standalone / controller-based", capacity: "User capacity depends on model" }, ["Secure office entry", "Server rooms", "Restricted departments"], ["fingerprint", "access", "reader", "door"]],
  ["face-recognition-access-control", "Face Recognition Access Control", "Face Recognition Reader", "access-control", "Face recognition readers for contactless secure access.", ["Touchless authentication", "Fast entry processing", "Modern access experience"], { verification: "Face recognition", mounting: "Wall mount", connectivity: "Standalone / controller-based", capacity: "User capacity depends on model" }, ["Modern offices", "Reception entry", "Contactless access"], ["face", "access", "reader", "door"]],
  ["rfid-card-reader", "RFID Card Reader", "Card Reader", "access-control", "RFID card readers for door access and employee identification.", ["Card-based access", "Easy credential management", "Compatible with access controllers"], { verification: "RFID / card", mounting: "Wall mount", connectivity: "Wiegand / controller-based", readRange: "Model dependent" }, ["Office doors", "Staff entry", "Visitor management"], ["rfid", "reader", "card", "access"]],
  ["exit-button", "Exit Button", "Exit Release Button", "accessories", "Exit buttons for convenient door release from inside secured areas.", ["Simple one-touch exit", "Durable for daily use", "Compatible with access systems"], { type: "Push button", mounting: "Wall mount", usage: "Indoor exit release", compatibility: "Access control systems" }, ["Office exits", "Secure rooms", "Controlled doors"], ["exit", "button", "door", "access"]],
  ["magnetic-door-lock", "Magnetic Door Lock", "Electromagnetic Lock", "locks", "Electromagnetic locks for secure access-controlled doors.", ["Strong holding force options", "Fail-safe / fail-secure options depending on model", "Suitable for glass and standard doors"], { holdingForce: "Model dependent", type: "Electromagnetic", power: "12V / 24V depending on model", usage: "Indoor controlled doors" }, ["Office doors", "Server rooms", "Restricted entry points"], ["maglock", "magnetic", "lock", "door"]],
  ["electric-lock", "Electric Lock", "Electric Strike / Lock", "locks", "Electric locks and strikes for controlled door access integration.", ["Works with access controllers", "Multiple door type options", "Professional installation recommended"], { type: "Electric strike / lock", power: "12V DC typical", compatibility: "Access control systems", mounting: "Door frame installation" }, ["Controlled doors", "Office entry", "Security upgrades"], ["electric", "lock", "strike", "door"]],
  ["access-control-power-supply", "Access Control Power Supply", "Access Power Supply", "accessories", "Power supplies for access controllers, locks, and readers.", ["Stable power for access hardware", "Backup battery options on some models", "Cabinet mount options"], { output: "12V DC typical", backup: "Battery backup depending on model", capacity: "Load dependent", mounting: "Box / cabinet" }, ["Access control systems", "Lock power", "Controller installations"], ["power", "supply", "access", "12v"]],
  ["rfid-cards", "RFID Cards", "RFID Access Cards", "accessories", "RFID cards for employee access and attendance systems.", ["Programmable credentials", "Available in packs", "Compatible with supported readers"], { type: "RFID card", frequency: "Model/system dependent", format: "Standard card form factor", quantity: "Available on request" }, ["Staff access", "Attendance systems", "Credential replacement"], ["rfid", "card", "access"]],
  ["rfid-key-fobs", "RFID Key Fobs", "RFID Key Fob", "accessories", "Compact RFID key fobs for convenient access credentials.", ["Portable access credential", "Easy to issue to staff", "Compatible with supported readers"], { type: "RFID key fob", frequency: "Model/system dependent", format: "Key fob", quantity: "Available on request" }, ["Staff access", "Small teams", "Credential replacement"], ["rfid", "key fob", "access"]],
  ["door-sensors", "Door Sensors", "Door Contact Sensor", "accessories", "Magnetic door sensors for monitoring door status in access systems.", ["Open/close status monitoring", "Works with access controllers", "Improves security visibility"], { type: "Magnetic contact", mounting: "Door and frame", usage: "Status monitoring", compatibility: "Access control systems" }, ["Secure doors", "Alarm integration", "Access monitoring"], ["sensor", "door", "contact", "access"]],
  ["access-control-accessories", "Access Control Accessories", "Access Control Accessory Kit", "accessories", "Supporting accessories for access control and attendance installations.", ["Brackets, enclosures, and installation items", "Project-specific selection", "Professional installation support available"], { includes: "Project dependent", usage: "Installation and maintenance", compatibility: "Access and attendance systems", availability: "Available on request" }, ["Installations", "Upgrades", "Maintenance"], ["accessories", "access", "attendance"]],
].map(([slug, name, type, subcategory, shortDescription, features, specifications, applications, keywords]) =>
  createProduct({
    id: `access-attendance-${slug}`,
    category: "access-attendance",
    subcategory,
    name,
    type,
    shortDescription,
    features,
    specifications,
    applications,
    keywords,
  })
);

const NETWORKING_PRODUCTS = [
  ["network-switch", "Network Switch", "Ethernet Switch", "switches", "Ethernet switches for connecting devices across office and business networks.", ["Reliable local networking", "Multiple port options", "Suitable for expanding connectivity"], { ports: "5 / 8 / 16 / 24 depending on model", speed: "Fast Ethernet / Gigabit depending on model", poeSupport: "Available on selected models", mounting: "Desktop / rack mount options" }, ["Office LAN", "Device connectivity", "Network expansion"], ["switch", "network", "ethernet", "lan"]],
  ["managed-switch", "Managed Switch", "Managed Network Switch", "switches", "Managed switches with advanced configuration for business networks.", ["VLAN and traffic control options", "Better network management", "Suitable for growing offices"], { management: "Web / CLI depending on model", ports: "8 / 16 / 24 / 48 depending on model", speed: "Gigabit typical", poeSupport: "Available on selected models" }, ["Business networks", "Segmented LANs", "Advanced office setups"], ["managed", "switch", "network", "vlan"]],
  ["unmanaged-switch", "Unmanaged Switch", "Unmanaged Network Switch", "switches", "Plug-and-play switches for simple network expansion.", ["Easy setup", "No configuration required", "Cost-effective connectivity"], { management: "Unmanaged", ports: "5 / 8 / 16 / 24 depending on model", speed: "Fast Ethernet / Gigabit depending on model", mounting: "Desktop / wall mount options" }, ["Small offices", "Home offices", "Simple expansions"], ["unmanaged", "switch", "network"]],
  ["poe-switch", "PoE Switch", "Power over Ethernet Switch", "switches", "PoE switches that deliver power and data to compatible devices over one cable.", ["Powers IP phones, cameras, and APs", "Cleaner cabling", "Multiple port options"], { poeSupport: "PoE / PoE+ depending on model", ports: "4 / 8 / 16 / 24 depending on model", speed: "Fast Ethernet / Gigabit depending on model", budget: "PoE power budget depends on model" }, ["IP CCTV", "VoIP phones", "Wireless access points"], ["poe", "switch", "network", "power"]],
  ["router", "Router", "Network Router", "routers", "Routers for internet connectivity and local network routing.", ["Internet gateway capability", "Wired and wireless models available", "Suitable for offices and branches"], { wanPorts: "1+ depending on model", lanPorts: "Model dependent", wireless: "Available on selected models", speed: "Model dependent" }, ["Internet access", "Office routing", "Branch connectivity"], ["router", "network", "internet", "gateway"]],
  ["wifi-router", "Wi-Fi Router", "Wireless Router", "routers", "Wireless routers for combined internet access and Wi-Fi coverage.", ["Integrated Wi-Fi", "Easy office deployment", "Guest network options on selected models"], { wirelessStandard: "Wi-Fi 5 / Wi-Fi 6 depending on model", lanPorts: "Model dependent", wanPorts: "1+ depending on model", coverage: "Depends on environment and model" }, ["Small offices", "Shops", "Home office setups"], ["wifi", "router", "wireless", "internet"]],
  ["wireless-access-point", "Wireless Access Point", "Wi-Fi Access Point", "wifi", "Dedicated access points for reliable office Wi-Fi coverage.", ["Better coverage than basic routers", "Ceiling and wall mount options", "Central management on business models"], { wirelessStandard: "Wi-Fi 5 / Wi-Fi 6 depending on model", mounting: "Ceiling / wall", poeSupport: "Available on selected models", coverage: "Depends on environment and model" }, ["Office Wi-Fi", "Meeting rooms", "Coverage expansion"], ["wifi", "access point", "wireless", "ap"]],
  ["enterprise-access-point", "Enterprise Access Point", "Enterprise Wi-Fi AP", "wifi", "Business-grade access points for larger or demanding wireless environments.", ["Higher capacity options", "Advanced management features", "Suitable for multi-AP deployments"], { wirelessStandard: "Wi-Fi 6 / Wi-Fi 6E depending on model", management: "Cloud / controller options depending on model", poeSupport: "PoE typical", mounting: "Ceiling / wall" }, ["Large offices", "Hotels", "Multi-room coverage"], ["enterprise", "wifi", "access point", "business"]],
  ["network-cabinet", "Network Cabinet/Rack", "Network Rack", "accessories", "Cabinets and racks for organizing switches, patch panels, and network equipment.", ["Neat equipment organization", "Secure installation options", "Multiple size options"], { size: "6U / 9U / 12U / 42U depending on model", type: "Wall / floor cabinet", ventilation: "Model dependent", usage: "Network equipment housing" }, ["Server rooms", "Office network closets", "Structured cabling"], ["rack", "cabinet", "network"]],
  ["patch-panel", "Patch Panel", "Network Patch Panel", "cabling", "Patch panels for structured network cabling and organized terminations.", ["Clean cable management", "Professional network closets", "Multiple port options"], { ports: "12 / 24 / 48 depending on model", type: "Cat5e / Cat6 depending on model", mounting: "Rack mount", usage: "Structured cabling" }, ["Network closets", "Office cabling", "Professional installs"], ["patch panel", "network", "cabling"]],
  ["patch-cord", "Patch Cord", "Ethernet Patch Cord", "cabling", "Ready-made Ethernet patch cords for rack and device connections.", ["Reliable short links", "Multiple lengths available", "Cat5e / Cat6 options"], { category: "Cat5e / Cat6 depending on model", length: "0.5m to 10m+ on request", connector: "RJ45", usage: "Patch panel to switch/device" }, ["Rack connections", "Desk links", "Temporary setups"], ["patch cord", "ethernet", "cable", "rj45"]],
  ["ethernet-cable", "Ethernet Cable", "Structured Network Cable", "cabling", "Ethernet cabling for office networks and structured installations.", ["Bulk and custom length options", "Indoor routing support", "Professional termination available"], { category: "Cat5e / Cat6 / Cat6A depending on requirement", type: "UTP / FTP depending on requirement", usage: "Horizontal and backbone cabling", length: "Custom length on request" }, ["Office LAN", "New building cabling", "Network upgrades"], ["ethernet", "cable", "cat6", "network"]],
  ["fiber-optic-cable", "Fiber Optic Cable", "Fiber Cable", "fiber", "Fiber optic cabling for long-distance and high-speed network links.", ["Long-distance connectivity", "Indoor and outdoor options", "Professional termination available"], { type: "Single-mode / multi-mode depending on requirement", connectors: "LC / SC depending on project", usage: "Backbone and long links", length: "Custom length on request" }, ["Building links", "Long-distance connections", "High-speed backbones"], ["fiber", "optic", "cable", "network"]],
  ["fiber-media-converter", "Fiber Media Converter", "Fiber Converter", "fiber", "Media converters for connecting fiber and copper network segments.", ["Extends network over fiber", "Useful for long cable runs", "Multiple speed options"], { conversion: "Fiber to copper", speed: "Fast Ethernet / Gigabit depending on model", fiberType: "Single-mode / multi-mode depending on model", mounting: "Desktop / chassis options" }, ["Long links", "Building interconnect", "Fiber expansion"], ["fiber", "media converter", "network"]],
  ["sfp-module", "SFP Module", "SFP Transceiver", "fiber", "SFP modules for fiber and copper uplinks on compatible switches and routers.", ["Modular uplink options", "Multiple distance and fiber types", "Compatible with supported hardware"], { formFactor: "SFP / SFP+", speed: "1G / 10G depending on model", media: "Fiber / copper depending on model", distance: "Model dependent" }, ["Switch uplinks", "Fiber connections", "Network upgrades"], ["sfp", "transceiver", "fiber", "network"]],
  ["network-adapter", "Network Adapter", "Network Interface Adapter", "accessories", "USB and PCIe network adapters for adding connectivity to computers and devices.", ["Adds wired or wireless connectivity", "Useful for upgrades and repairs", "Multiple interface options"], { interface: "USB / PCIe depending on model", speed: "Fast Ethernet / Gigabit / Wi-Fi depending on model", compatibility: "Windows / Linux depending on model", usage: "PC and device connectivity" }, ["PC upgrades", "Repairs", "Temporary connectivity"], ["adapter", "network", "usb", "pcie"]],
  ["network-connector", "Network Connectors", "RJ45 / Keystone Connectors", "accessories", "Connectors and termination parts for network cabling projects.", ["Professional termination support", "Compatible with structured cabling", "Available in project quantities"], { types: "RJ45 / keystone / coupler depending on requirement", category: "Cat5e / Cat6 depending on requirement", usage: "Cable termination", quantity: "Available on request" }, ["Structured cabling", "Repairs", "New installations"], ["connector", "rj45", "keystone", "network"]],
  ["network-tools", "Network Tools", "Network Tool Kit", "accessories", "Tools for installing, testing, and maintaining network cabling.", ["Crimping and testing tools", "Professional installation support", "Project-specific selection"], { includes: "Crimp tool / tester / punch down depending on kit", usage: "Installation and maintenance", compatibility: "Ethernet cabling", availability: "Available on request" }, ["Installations", "Maintenance", "Troubleshooting"], ["tools", "network", "crimp", "tester"]],
  ["networking-ups", "UPS for Networking Equipment", "Network UPS", "accessories", "Uninterruptible power supplies to protect routers, switches, and critical network hardware.", ["Protects against power interruptions", "Multiple capacity options", "Compact models for network closets"], { capacity: "650VA to 3000VA+ depending on model", outlets: "Model dependent", formFactor: "Tower / rack options", runtime: "Load dependent" }, ["Network closets", "Office routers", "Critical connectivity"], ["ups", "power", "network", "backup"]],
].map(([slug, name, type, subcategory, shortDescription, features, specifications, applications, keywords]) =>
  createProduct({
    id: `networking-${slug}`,
    category: "networking",
    subcategory,
    name,
    type,
    shortDescription,
    features,
    specifications,
    applications,
    keywords,
  })
);

const COMPUTER_PRODUCTS = [
  ["desktop-computer", "Desktop Computer", "Desktop PC", "computers", "Desktop computers for office work, business operations, and daily productivity.", ["Configurable for office use", "Setup and support available", "Suitable for business environments"], { formFactor: "Desktop tower / SFF depending on model", processor: "Model dependent", memory: "Model dependent", storage: "HDD / SSD depending on model" }, ["Office workstations", "Front desk systems", "Business operations"], ["desktop", "computer", "pc", "office"]],
  ["laptop-computer", "Laptop Computer", "Business Laptop", "laptops", "Laptops for mobile work, meetings, and flexible business operations.", ["Portable business computing", "Multiple performance options", "Setup and support available"], { formFactor: "Laptop", screenSize: "14\" / 15.6\" / 16\" depending on model", processor: "Model dependent", storage: "SSD typical on modern models" }, ["Mobile staff", "Meetings", "Field work"], ["laptop", "notebook", "computer", "portable"]],
  ["monitor", "Monitor", "Display Monitor", "monitors", "Monitors for office desks, reception areas, and multi-screen workstations.", ["Multiple size options", "Office-friendly designs", "Mount and stand options"], { screenSize: "22\" to 32\"+ depending on model", resolution: "Full HD / QHD / 4K depending on model", panel: "Model dependent", mounting: "Stand / VESA mount options" }, ["Office desks", "Reception displays", "Dual-screen setups"], ["monitor", "display", "screen"]],
  ["keyboard", "Keyboard", "Computer Keyboard", "peripherals", "Keyboards for office computers and everyday business use.", ["Wired and wireless options", "Comfortable daily use", "Multiple layout options"], { connectivity: "USB / wireless depending on model", layout: "Standard / compact options", type: "Membrane / mechanical depending on model", compatibility: "Windows / Linux / macOS depending on model" }, ["Office desks", "Reception", "Shared workstations"], ["keyboard", "peripheral", "input"]],
  ["mouse", "Mouse", "Computer Mouse", "peripherals", "Mice for office computers and daily business tasks.", ["Wired and wireless options", "Ergonomic and compact models", "Reliable daily use"], { connectivity: "USB / wireless depending on model", type: "Optical / wireless depending on model", buttons: "Standard / multi-button options", compatibility: "Windows / Linux / macOS depending on model" }, ["Office desks", "Shared workstations", "Laptop setups"], ["mouse", "peripheral", "input"]],
  ["printer", "Printer", "Office Printer", "peripherals", "Printers for office documents, receipts, and daily business printing needs.", ["Inkjet and laser options", "Network and USB models available", "Setup support available"], { type: "Inkjet / laser / multifunction depending on model", connectivity: "USB / network / wireless depending on model", functions: "Print / scan / copy depending on model", paperSize: "A4 typical" }, ["Office printing", "Shops", "Document workflows"], ["printer", "office", "print"]],
  ["computer-ups", "UPS", "Uninterruptible Power Supply", "accessories", "UPS units to protect computers and office equipment from power interruptions.", ["Protects against sudden shutdowns", "Multiple capacity options", "Tower and compact models available"], { capacity: "650VA to 3000VA+ depending on model", outlets: "Model dependent", formFactor: "Tower typical", runtime: "Load dependent" }, ["Office computers", "POS systems", "Critical workstations"], ["ups", "power", "backup", "computer"]],
  ["external-hard-drive", "External Hard Drive", "External HDD", "storage", "External hard drives for backup, file storage, and data portability.", ["Portable storage expansion", "USB connectivity", "Multiple capacity options"], { interface: "USB 3.0 / USB-C depending on model", capacity: "500GB to 8TB+ depending on model", formFactor: "Portable", usage: "Backup and file storage" }, ["Data backup", "File transfer", "Office archives"], ["external", "hard drive", "storage", "hdd"]],
  ["ssd", "SSD", "Solid State Drive", "storage", "SSDs for faster computer performance and storage upgrades.", ["Faster boot and load times", "Upgrade option for desktops and laptops", "Multiple capacity options"], { interface: "SATA / NVMe depending on model", capacity: "240GB to 2TB+ depending on model", formFactor: "2.5\" / M.2 depending on model", usage: "System and data storage" }, ["PC upgrades", "Performance improvement", "System replacement drives"], ["ssd", "storage", "nvme", "sata"]],
  ["ram", "RAM", "Memory Module", "storage", "Memory modules for computer performance upgrades and replacements.", ["Improves multitasking performance", "Multiple capacity options", "Compatible modules selected for your device"], { type: "DDR4 / DDR5 depending on system", capacity: "4GB to 32GB+ per module", formFactor: "DIMM / SO-DIMM depending on system", speed: "Model dependent" }, ["PC upgrades", "Repairs", "Performance improvement"], ["ram", "memory", "upgrade"]],
  ["flash-drive", "Flash Drive", "USB Flash Drive", "storage", "USB flash drives for quick file transfer and portable storage.", ["Compact and portable", "Multiple capacity options", "Useful for daily file sharing"], { interface: "USB-A / USB-C depending on model", capacity: "8GB to 256GB+ depending on model", formFactor: "USB flash drive", usage: "Portable file transfer" }, ["File sharing", "Temporary backups", "Software transfer"], ["flash drive", "usb", "storage"]],
  ["webcam", "Webcam", "USB Webcam", "peripherals", "Webcams for meetings, remote work, and video communication.", ["Plug-and-play options", "Built-in microphone on selected models", "Suitable for office and home use"], { connectivity: "USB", resolution: "720p / 1080p / 4K depending on model", microphone: "Available on selected models", mounting: "Clip / tripod mount options" }, ["Online meetings", "Remote work", "Reception desks"], ["webcam", "camera", "meeting", "video"]],
  ["headset", "Headset", "Office Headset", "peripherals", "Headsets for calls, meetings, and focused office communication.", ["Wired and wireless options", "Microphone included", "Comfortable for daily use"], { connectivity: "USB / 3.5mm / wireless depending on model", microphone: "Included", type: "On-ear / over-ear depending on model", usage: "Calls and meetings" }, ["Call centers", "Office calls", "Remote meetings"], ["headset", "audio", "microphone"]],
  ["speakers", "Speakers", "Computer Speakers", "peripherals", "Speakers for office computers, presentations, and audio playback.", ["Desktop speaker options", "Simple setup", "Suitable for office environments"], { connectivity: "USB / 3.5mm / Bluetooth depending on model", type: "Desktop / compact depending on model", power: "Model dependent", usage: "Audio playback and alerts" }, ["Office desks", "Training rooms", "Reception areas"], ["speakers", "audio", "desktop"]],
  ["computer-power-supply", "Computer Power Supply", "PC Power Supply Unit", "accessories", "Power supply units for desktop computer repairs and custom builds.", ["Multiple wattage options", "Replacement and upgrade support", "Compatible models selected for your system"], { wattage: "Model dependent", certification: "80 PLUS options depending on model", formFactor: "ATX typical", usage: "Desktop PC power replacement" }, ["PC repairs", "Custom builds", "Power upgrades"], ["power supply", "psu", "desktop"]],
  ["computer-case", "Computer Case", "PC Case", "accessories", "Computer cases for desktop builds, replacements, and office custom systems.", ["Multiple size options", "Airflow-focused designs available", "Support for standard components"], { formFactor: "Mid tower / mini tower depending on model", support: "ATX / mATX / ITX depending on model", bays: "Model dependent", usage: "Desktop PC housing" }, ["Custom builds", "Office desktops", "Replacements"], ["case", "chassis", "desktop"]],
  ["cooling-fan", "Cooling Fan", "PC Cooling Fan", "accessories", "Cooling fans for desktop computers and thermal management.", ["Improves airflow", "Replacement and upgrade options", "Multiple size options"], { size: "80mm to 140mm depending on model", type: "Case / CPU cooler fan depending on model", connector: "3-pin / 4-pin PWM depending on model", usage: "Desktop cooling" }, ["PC cooling upgrades", "Repairs", "Thermal management"], ["fan", "cooling", "pc"]],
  ["laptop-accessories", "Laptop Accessories", "Laptop Accessory Kit", "accessories", "Accessories for laptop protection, connectivity, and daily use.", ["Bags, stands, and adapters available", "Project-specific selection", "Useful for mobile teams"], { includes: "Bag / stand / adapter depending on requirement", compatibility: "Universal / model specific options", usage: "Daily laptop use", availability: "Available on request" }, ["Mobile staff", "Travel", "Office laptop setups"], ["laptop", "accessories", "bag", "stand"]],
  ["computer-cables", "Computer Cables", "PC Connectivity Cable", "accessories", "Cables for connecting computers, monitors, printers, and accessories.", ["HDMI, USB, and power cable options", "Custom lengths on request", "Useful for office setup and repairs"], { types: "HDMI / USB / power / Ethernet depending on requirement", length: "Standard and custom options", usage: "Device connectivity", availability: "Available on request" }, ["Office setup", "Repairs", "Desk organization"], ["cables", "hdmi", "usb", "computer"]],
  ["adapters", "Adapters", "Computer Adapter", "accessories", "Adapters for connecting modern and legacy computer interfaces.", ["USB-C, HDMI, and display adapters", "Useful for laptop and monitor setups", "Multiple connector options"], { types: "USB-C / HDMI / VGA / Ethernet depending on requirement", usage: "Connectivity conversion", compatibility: "Device dependent", availability: "Available on request" }, ["Laptop docking", "Monitor connection", "Legacy device support"], ["adapter", "usb-c", "hdmi", "converter"]],
].map(([slug, name, type, subcategory, shortDescription, features, specifications, applications, keywords]) =>
  createProduct({
    id: `computers-${slug}`,
    category: "computers",
    subcategory,
    name,
    type,
    shortDescription,
    features,
    specifications,
    applications,
    keywords,
  })
);

export const products = [
  ...CCTV_PRODUCTS,
  ...ACCESS_PRODUCTS,
  ...NETWORKING_PRODUCTS,
  ...COMPUTER_PRODUCTS,
];

export function getProductById(id) {
  return products.find((product) => product.id === id) || null;
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getProductsBySubcategory(category, subcategory) {
  return products.filter(
    (product) => product.category === category && product.subcategory === subcategory
  );
}

export function searchProducts(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;

  return products.filter((product) => {
    const haystack = [
      product.name,
      product.type,
      product.shortDescription,
      product.description,
      product.category,
      product.subcategory,
      ...(product.keywords || []),
      ...Object.values(product.specifications || {}),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter(
      (item) =>
        item.id !== product.id &&
        (item.category === product.category || item.subcategory === product.subcategory)
    )
    .slice(0, limit);
}

export default products;
