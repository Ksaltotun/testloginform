

import { postApi } from '../../service/PostService'
import './MainPage.scss'

export const MainPage: React.FC = () => {

    const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(10)
    return (
        <section className='MainPage'>
            <header className='headMenuBox'><h1>TOP MENU</h1></header>
            <aside className='leftMenuBox'>
               <div className="navButtons">Админка</div>
               <div className="navButtons">Че-то там</div>
               <div className="navButtons">Подтянуть ченить</div> 
            </aside>
            <section className='contentBox'></section>
            <footer className='footerBox'></footer>
        </section>
    )
}
