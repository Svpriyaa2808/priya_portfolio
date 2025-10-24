import { projectArray } from "./data"

export const slugify = (projectName) => {
  return  projectName.toLowerCase()
                    .replace(/[^\w\s-]/g,'')
                    .replace(/[\s_]/g,'-')
                    .replace(/-+/g,'-')
                
}

export const selectedProject = (projectName) => {
   return projectArray.find(item => item.title === projectName);
}

export const unslugify = (slug) => {
  return slug
    .replace(/-/g, ' ')          
    .replace(/\b\w/g, (l) => l.toUpperCase()); 
};
