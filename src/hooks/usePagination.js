export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
     Hook return array for items to be displyer on the pagination bar.
     It will always return at least one since there is at least one post.
 
     Then it checks for the cases in the edge of the index and performs specific steps for them.
 
     after it returns the value array
     
   */
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages == 1) return [1];

  let l = currentPage - 1;
  let r = currentPage + 1;
  const trio = [];

  if (l > 1 && r < totalPages) {
    trio.push(DOTS);
    trio.push(l);
    trio.push(currentPage);
    trio.push(r);
    trio.push(DOTS);
  } else {
    if (l == 1 || currentPage == 1) {
      trio.push(2);
      trio.push(3);
      trio.push(DOTS);
    } else {
      trio.push(DOTS);
      trio.push(totalPages - 2);
      trio.push(totalPages - 1);
    }
  }

  return [1, ...trio, totalPages];
}

export default usePagination;
