import type { BadgeProps } from "@/components/ui/badge";
import { ClassifiedStatus, CustomerStatus } from "@prisma/client";
import { routes } from "./routes";



export const imageSources = {
    classifiedPlaceholder: "https://eazydev-autoshop.s3.eu-north-1.amazonaws.com/uploads/AdobeStock_855683950.jpeg",
    
    carLineup: "https://eazydev-autoshop.s3.eu-north-1.amazonaws.com/uploads/feature-collection.png",

    featureSection: "https://eazydev-autoshop.s3.eu-north-1.amazonaws.com/uploads/AdobeStock_753683117.jpeg"
}

export const CLASSIFIEDS_PER_PAGE = 3;


export const navLinks = [
    { id: 1, href: routes.home, label: "Home" },
    { id: 2, href: routes.inventory, label: "Inventory" },
];

export const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days
export const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
export const MAX_IMAGES = 20;
export const sortOrder = ["asc", "desc"] as const;

export const CustomerBadgeMap: Record<CustomerStatus, BadgeProps["variant"]> = {
	[CustomerStatus.COLD]: "secondary",
	[CustomerStatus.CONTACTED]: "default",
	[CustomerStatus.INTERESTED]: "destructive",
	[CustomerStatus.PURCHASED]: "warning",
	[CustomerStatus.SUBSCRIBER]: "info",
};


export const ClassifiedBadgeMap: Record<
	ClassifiedStatus,
	BadgeProps["variant"]
> = {
	[ClassifiedStatus.DRAFT]: "secondary",
	[ClassifiedStatus.LIVE]: "default",
	[ClassifiedStatus.SOLD]: "destructive",
};
