const CategoryFilter = () => {
  const data = [
    {
      name: "cat1",
      child: ["child1", "child2", "child3", "child4"],
    },
    {
      name: "cat1",
      child: ["child1", "child2", "child3", "child4"],
    },
    {
      name: "cat1",
      child: ["child1", "child2", "child3", "child4"],
    },
    {
      name: "cat1",
      child: ["child1", "child2", "child3", "child4"],
    },
  ];
  return (
    <>
      <div className="category_filter">
        <div className="display_cat">
          {data.map((data1) => {
            return (
              <div className="px-3">
                <h5 className="px-1">{data1.name}</h5>
                {data1.child.map((data2) => {
                  return (
                    <>
                      <h6 className="px-3">{data2}</h6>
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CategoryFilter;
