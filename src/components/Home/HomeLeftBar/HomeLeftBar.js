import React from 'react';
import AddNewButton from './AddNewButton/AddNewButton';
import TaskList from './TaskList/TaskList';

const HomeLeftBar = () => {
    return (
        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
            <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <AddNewButton></AddNewButton>
                <TaskList></TaskList>
            </main>
        </div>
    );
};

export default HomeLeftBar;