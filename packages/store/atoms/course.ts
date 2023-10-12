import {atom} from "recoil";

export const courseState = atom<CourseState>({
    key: 'courseState',
    default: {
        isLoading: true,
        course: null
    },
});

export type CourseState = {
    isLoading: boolean;
    course: {
        title: string;
        price: number;
        image: string;
    } | null;
};