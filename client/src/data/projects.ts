export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "galactic-dashboard",
    title: "Galactic Dashboard",
    description: "A React-based space mission control interface with real-time data visualization and 3D planet tracking using Three.js and WebGL.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: [
      { name: "React", color: "space-teal" },
      { name: "Three.js", color: "space-purple" },
      { name: "D3.js", color: "space-orange" }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "cosmic-commerce",
    title: "Cosmic Commerce",
    description: "An e-commerce platform for space merchandise with immersive 3D product previews and AR try-on features for astronaut gear.",
    image: "https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: [
      { name: "Next.js", color: "space-blue" },
      { name: "WebAR", color: "space-purple" },
      { name: "Stripe", color: "space-teal" }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "neural-visualizer",
    title: "Neural Network Visualizer",
    description: "Interactive 3D visualization of neural networks with real-time training animations and cosmic-themed UI for educational purposes.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: [
      { name: "Python", color: "space-orange" },
      { name: "TensorFlow", color: "space-purple" },
      { name: "WebGL", color: "space-teal" }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "space-weather",
    title: "Space Weather Monitor",
    description: "Real-time space weather tracking application with solar flare predictions and satellite trajectory calculations.",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: [
      { name: "Vue.js", color: "space-teal" },
      { name: "WebSocket", color: "space-orange" },
      { name: "Chart.js", color: "space-blue" }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "cosmic-chat",
    title: "Cosmic Chat",
    description: "A real-time messaging app with end-to-end encryption designed for space missions and interplanetary communication.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: [
      { name: "Socket.io", color: "space-purple" },
      { name: "Encryption", color: "space-orange" },
      { name: "PWA", color: "space-teal" }
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "mars-explorer",
    title: "Mars Explorer VR",
    description: "Virtual reality experience for exploring Mars surface with accurate geological data and interactive rover simulation.",
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    technologies: [
      { name: "WebXR", color: "space-blue" },
      { name: "A-Frame", color: "space-purple" },
      { name: "NASA API", color: "space-orange" }
    ],
    demoUrl: "#",
    githubUrl: "#"
  }
];
