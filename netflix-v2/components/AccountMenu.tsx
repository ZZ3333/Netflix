import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
    visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({
    visible
}) => {
    if (!visible) {
        return null;
    }
    return (
        <div>
            
        </div>
    )
}

export default AccountMenu;