const LocationFilter = () => {
  const data = [
    {
      name: "Qatar",
      child: [
        "Ad-Dawhah   (100)",
        "Al Rayyan(1020)",
        "Najma Street (200)",
        "Al Daayen (100)",
        "Umm Salal  (50)",
        "Al Khor (50)",
      ],
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
export default LocationFilter;
