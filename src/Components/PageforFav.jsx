// Desc: Pagination for Favourite page

const PaginationforFav = ({
    favtotalPosts,
    favpostsPerPage,
   setfavCurrentPage,
    favcurrentPage,
}) => {
    let pagess = [];

    for (let i = 1; i <= Math.ceil(favtotalPosts / favpostsPerPage); i++) {
        pagess.push(i);
    }

    return (
        <div className='pagination'>
            {pagess.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setfavCurrentPage(page)}
                        className={page == favcurrentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default PaginationforFav;