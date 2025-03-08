export interface Architecture {
  id: string;
  title: string;
  description: string;
  examples: string;
  characteristics: string;
}

export const architectures: Architecture[] = [
  {
    id: "client-server",
    title: "Client-Server Architecture",
    description: "A centralized server provides services or resources to multiple clients.",
    examples: "Web servers (e.g., HTTP servers), email servers.",
    characteristics: "Simple, but the server can be a bottleneck or single point of failure.",
  },
  {
    id: "peer-to-peer",
    title: "Peer-to-Peer (P2P) Architecture",
    description: "Nodes act as both clients and servers, sharing resources directly with each other.",
    examples: "BitTorrent, blockchain networks (e.g., Bitcoin).",
    characteristics: "Decentralized, scalable, but harder to manage consistency.",
  },
  {
    id: "master-slave",
    title: "Master-Slave Architecture",
    description: "A master node controls and delegates tasks to slave nodes.",
    examples: "Database replication (e.g., MySQL master-slave), MapReduce.",
    characteristics: "Centralized control, good for task distribution, but master is a single point of failure.",
  },
  {
    id: "multi-tier",
    title: "Multi-Tier Architecture (N-Tier)",
    description: "System is divided into multiple layers (e.g., presentation, application, data tiers).",
    examples: "Web applications (e.g., browser, app server, database).",
    characteristics: "Modular, scalable, widely used in enterprise systems.",
  },
  {
    id: "service-oriented",
    title: "Service-Oriented Architecture (SOA)",
    description: "System is composed of loosely coupled services that communicate over a network.",
    examples: "Enterprise systems using SOAP or REST APIs.",
    characteristics: "Reusable components, interoperable, but can be complex to orchestrate.",
  },
  {
    id: "microservices",
    title: "Microservices Architecture",
    description: "Small, independent services handle specific functions and communicate via lightweight protocols.",
    examples: "Netflix, Amazon’s backend systems.",
    characteristics: "Highly scalable, fault-isolated, but introduces deployment complexity.",
  },
  {
    id: "event-driven",
    title: "Event-Driven Architecture",
    description: "Components communicate by producing and consuming events, often via a message broker.",
    examples: "Apache Kafka-based systems, real-time analytics.",
    characteristics: "Asynchronous, responsive, but requires careful event management.",
  },
  {
    id: "publish-subscribe",
    title: "Publish-Subscribe (Pub/Sub) Architecture",
    description: "Publishers send messages to topics, and subscribers receive messages they’re interested in.",
    examples: "Google Cloud Pub/Sub, MQTT for IoT.",
    characteristics: "Decoupled, scalable, suits real-time systems.",
  },
  {
    id: "space-based",
    title: "Space-Based Architecture (Tuple Space)",
    description: "Processes communicate via a shared memory space or 'tuple space' rather than direct messaging.",
    examples: "JavaSpaces, GigaSpaces.",
    characteristics: "Highly decoupled, good for dynamic systems, less common today.",
  },
  {
    id: "cloud-native",
    title: "Cloud-Native Architecture",
    description: "Systems designed to leverage cloud infrastructure, often with microservices and containers.",
    examples: "Modern SaaS platforms like Slack or Zoom.",
    characteristics: "Elastic, resilient, but tied to cloud ecosystems.",
  },
  {
    id: "broker",
    title: "Broker Architecture",
    description: "A central broker mediates communication between distributed components.",
    examples: "CORBA, message queues like RabbitMQ.",
    characteristics: "Simplifies communication, but broker can be a bottleneck.",
  },
  {
    id: "layered",
    title: "Layered Architecture",
    description: "Components are organized into horizontal layers, each serving the layer above it.",
    examples: "OSI model-inspired systems, distributed middleware.",
    characteristics: "Structured, but can introduce latency across layers.",
  },
];