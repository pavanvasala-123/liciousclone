export interface sub_category{

    id:number,
    cat_name: string,
    cat_desc: string                                                                                                                                                                                                           
    slug: string,
    meta_desc: string,
    meta_keyword: string,
    meta_title: string,
    status: number,
    parent_id: number,
    cat_web_img: string,
    cat_tile_img: string,
    msite_desc: string,
    subtitle: string,
    popular: number,
    mobile_icon: string,
    mobile_icon_active: string,
    web_icon: string
    web_icon_active: string
    created_at: string,
    updated_at: string,
    theme_data: string,
    category_nav_section_img: string,
    category_nav_page_img: string,
    l0_subtext: string,
    is_old_flow: number,
    is_tree_flow: number,
    order: number,
    sub_categories: [],
    filter_id: number

}

export interface category_details{
    id: number;
    cat_name: string;
    cat_desc: string;
    cat_img: string;
    slug: string;
    meta_desc: string;
    meta_keyword: string;
    meta_title: string;
    status: number;
    parent_id: number;
    cat_web_img: string;
    cat_tile_img: string;
    msite_desc: string;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    subtitle: string;
    popular: number;
    mobile_icon: string;
    mobile_icon_active:string;
    web_icon: string;
    web_icon_active: string;
    created_at:string;
    updated_at:string;
    theme_data:string;
    category_nav_section_img:string;
    category_nav_page_img:string;
    l0_subtext:string;
    is_old_flow:number;
    is_tree_flow:number;
    order:number;
    sub_categories:sub_category[]


 
}


export interface category {
    createdAt: string;
    updatedAt: string;
    category_details :category_details
   }
