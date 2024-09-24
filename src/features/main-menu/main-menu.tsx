import { MenuTrayToggle } from "@/features/main-menu/menu-tray-toggle";
import {
  Menu,
  MenuBar,
  MenuItem,
  MenuItemContainer,
  menuIconProps,
} from "@/ui/menu";
import { Book, Home, MessageCircle, PocketKnife, VenetianMask } from "lucide-react";
import { getCurrentUser } from "../auth-page/helpers"; // Importing user auth
import { MenuLink } from "./menu-link";
import { UserProfile } from "./user-profile";

export const MainMenu = async () => {
  const user = await getCurrentUser(); // Fetch the current user
  
  return (
    <Menu>
      <MenuBar>
        <MenuItemContainer>
          <MenuItem tooltip="Home" asChild>
            <MenuLink href="/chat" ariaLabel="Go to the Home page">
              <Home {...menuIconProps} />
            </MenuLink>
          </MenuItem>
          <MenuTrayToggle />
        </MenuItemContainer>
        
        {/* Conditionally render 'personas' and 'extensions' for admin users */}
        {user.isAdmin && (
          <>
            <MenuItemContainer>
              <MenuItem tooltip="Personas" asChild>
                <MenuLink href="/persona" ariaLabel="Go to the Personas page">
                  <VenetianMask {...menuIconProps} />
                </MenuLink>
              </MenuItem>
            </MenuItemContainer>
            
            <MenuItemContainer>
              <MenuItem tooltip="Extensions" asChild>
                <MenuLink href="/extensions" ariaLabel="Go to the Extensions page">
                  <PocketKnife {...menuIconProps} />
                </MenuLink>
              </MenuItem>
            </MenuItemContainer>
          </>
        )}

        <MenuItemContainer>
          <MenuItem tooltip="Settings" asChild>
            <MenuLink href="/settings" ariaLabel="Go to the Settings page">
              <Sheet {...menuIconProps} />
            </MenuLink>
          </MenuItem>
        </MenuItemContainer>
        
        <UserProfile />
      </MenuBar>
    </Menu>
  );
};
