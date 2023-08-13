import PermissionModuleTypes from "./permission.interface"
import UserModuleTypes from "./user.interface"

export default interface RootStateTypes {
    test: string,
    username: string
}

export interface AllStateTypes extends RootStateTypes {
    permission: PermissionModuleTypes,
    user: UserModuleTypes
}
