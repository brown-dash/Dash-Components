
interface IGlobalScss {
    contextMenuZindex: string;  // context menu shows up over everything
    SCHEMA_DIVIDER_WIDTH: string;
    COLLECTION_BORDER_WIDTH: string;
    MINIMIZED_ICON_SIZE: string;
    MAX_ROW_HEIGHT: string;
    SEARCH_THUMBNAIL_SIZE: string;
    ANTIMODEMENU_HEIGHT: string;
    DASHBOARD_SELECTOR_HEIGHT: string;
    DFLT_IMAGE_NATIVE_DIM: string;
    LEFT_MENU_WIDTH: string;
    TREE_BULLET_WIDTH: string;
}
declare const globalCssVariables: IGlobalScss;

export = globalCssVariables;