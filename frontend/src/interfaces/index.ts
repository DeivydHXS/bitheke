export interface CategoryInterface {
    id: string;
    name: string;
    description: string;
    created_at: Date;
}

export interface BookInterface {
    id: string;
    title: string;
    description: string;
    price: number;
    category_id: string;
    category: CategoryInterface;
    shelf: string;
    created_at: Date;
}

export interface UserInterface {
    id: String,
    name: String,
    email: String,
    token: String
}