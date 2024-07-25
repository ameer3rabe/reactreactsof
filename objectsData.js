const objects = [
    { id: 1, name: 'Fanum', description: 'Twitch streamer', type: 'person', image: './fanum.png' },
    { id: 2, name: 'KaiCenat', description: 'Twitch streamer and youtuber', type: 'person', image: './kaicenat.png' },
    { id: 3, name: 'BillGates', description: 'Former CEO of Microsoft', type: 'person', image: './BillGates.png' },
    { id: 4, name: 'Steve Jobs', description: 'Former CEO of Apple', type: 'person', image: './stevejobs.png' },
    { id: 5, name: 'Cologne Cathedral', description: 'Cathedral Church of Saint Peter', type: 'landscape', image: './Cologne Cathedral.png' },
    { id: 6, name: 'london eye', description: 'Europes tallest cantilevered observation wheel', type: 'landscape', image: './londoneye.png' },
    { id: 7, name: 'egyptpyramids', description: 'The Egyptian pyramids are ancient masonry structures', type: 'landscape', image: './egyptpyramids.png' },
    { id: 8, name: 'timessquare', description: 'Times Square is a major commercial intersection in NewYork', type: 'landscape', image: './timessquare.png' },
  ];
  
export const landscapes = objects.filter(item => item.type === 'landscape');
export const persons = objects.filter(item => item.type === 'person');
export default objects;