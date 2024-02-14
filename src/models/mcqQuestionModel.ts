import { mongoose } from "./db";


export interface Category extends mongoose.Document {

    name: string;

}


export interface Question extends mongoose.Document {

    question: string;
    options: { option: string; isCorrect: boolean }[];


    category: mongoose.Types.ObjectId | Category;

}





//schema for categories of the MCQ's

const categorySchema: mongoose.Schema = new mongoose.Schema<Category>({
    name: {
        type: String,
        required: true
    }
});




const mcqSchema: mongoose.Schema = new mongoose.Schema<Question>({
    question: {
        type: String,
        required: true
    },
    options: [{
        option: String,
        isCorrect: Boolean
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' 
    }
});

const CategoryModel = mongoose.model<Category>('Category', categorySchema);

const McqModel = mongoose.model<Question>('mcqQuestions', mcqSchema);

export { CategoryModel, McqModel };
