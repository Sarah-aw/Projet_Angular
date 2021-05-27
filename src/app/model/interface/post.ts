export class Post {  
    title: string;  
    content: string;  
    lovesIts: number;  
    created_at: Date;

    constructor(title: string, content: string, loveIts: number, createdAt: Date = new Date()) {
        this.title = title;
        this.content = content;
        this.lovesIts = loveIts;
        this.created_at = createdAt;
}
}