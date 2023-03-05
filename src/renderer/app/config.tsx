import { FaIdBadge } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { ImEarth } from "react-icons/im";

export enum Contexts {
  API_AUTHENTICATION = "api_authentication",
  API_MESSAGING = "api_messaging",
  API_GLOBE = "api_globe",
  SOCKET_AUTHENTICATION = "socket_authentication",
  SOCKET_MESSAGING = "socket_messaging",
  SOCKET_GLOBE = "socket_globe",
}

export const SidebarActions: Renderer.Component.Sidebar.SidebarGroup[] = [
  {
    groupName: "API",
    actions: [
      {
        name: "Authentication",
        icon: <FaIdBadge />,
        context: Contexts.API_AUTHENTICATION,
      },
      {
        name: "Messaging",
        icon: <RiMessage2Fill />,
        context: Contexts.API_MESSAGING,
      },
      {
        name: "Globe",
        icon: <ImEarth />,
        context: Contexts.API_GLOBE,
      },
    ],
  },
  {
    groupName: "SOCKET",
    actions: [
      {
        name: "Authentication",
        icon: <FaIdBadge />,
        context: Contexts.SOCKET_AUTHENTICATION,
      },
      {
        name: "Messaging",
        icon: <RiMessage2Fill />,
        context: Contexts.SOCKET_MESSAGING,
      },
      {
        name: "Globe",
        icon: <ImEarth />,
        context: Contexts.SOCKET_GLOBE,
      },
    ],
  },
];
