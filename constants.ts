import { CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNT = 5;

export const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-[#FB3640]",
        bgColor: "bg-[#FB3640]/10",
        href: "/conversation",
    },
    {
        label: "Image Generator",
        icon: ImageIcon,
        href: "/image",
        bgColor: "bg-[#65AFFF]/10",
        color: "text-[#65AFFF]",
    },
    {
        label: "Video Generator",
        icon: VideoIcon,
        href: "/video",
        bgColor: "bg-[#FE5D9F]/10",
        color: "text-[#FE5D9F]",
    },
    {
        label: "Music Generator",
        icon: MusicIcon,
        href: "/music",
        bgColor: "bg-[#B79CED]/10",
        color: "text-[#B79CED]",
    },
    {
        label: "Code Generator",
        icon: CodeIcon,
        href: "/code",
        bgColor: "bg-[#14CC60]/10",
        color: "text-[#14CC60]",
    },
];