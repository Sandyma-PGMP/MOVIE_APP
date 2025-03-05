// Desc: Pagination for Favourite page

const PaginationforFav = ({
    TotalPosts=0,
    PostsPerPage=0,
   setCurrentPage=()=>{},
    CurrentPage=0,
}) => {
    let pagess = [];

    for (let i = 1; i <= Math.ceil(TotalPosts / PostsPerPage); i++) {
        pagess.push(i);
    }
    console.log(TotalPosts, PostsPerPage, CurrentPage);

    return (
        <div className='pagination'>
            {pagess.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == CurrentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

PaginationforFav.prototype = {
    totalPosts: Number,
    postsPerPage: Number,
    setCurrentPage: Function,
    currentPage: Number
};

export default PaginationforFav;