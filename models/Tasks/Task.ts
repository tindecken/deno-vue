
export interface Task {
    Id: number;
    UserId: number;
    CategoryId: number
    Title: string;
    Description?: string;
    Completed: boolean;
    DueDate?: Date;
    CreatedAt: Date;
    UpdatedAt?: Date;
  }
  