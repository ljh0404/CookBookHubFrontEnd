export interface SearchAllRootObject {
    activeFilterOptions: any[];
    expires:             number;
    filterMapping:       FilterMapping;
    filterOptions:       any[];
    limit:               number;
    offset:              number;
    query:               string;
    searchResults:       SearchResult[];
    sorting:             string;
    totalResults:        number;
   }
   
   export interface FilterMapping {
   }
   
   export interface SearchResult {
    name:                  string;
    results:               Result[];
    totalResults:          number;
    totalResultsVariants?: number;
    type:                  string;
   }
   
   export interface Result {
    content?:    null | string;
    dataPoints?: any[];
    id?:         number;
    image:       string;
    images?:     any[];
    link?:       null | string;
    name:        string;
    relevance:   number;
    type:        Type;
   }
   
   export enum Type {
    HTML = "HTML",
    YoutubeVideo = "YOUTUBE_VIDEO",
   }
   