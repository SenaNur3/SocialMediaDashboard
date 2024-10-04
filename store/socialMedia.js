import { defineStore } from "pinia";

export const useSocialMedia = defineStore("socialMedia", {
  state: () => ({
    post: [],
  }),
  getters: {
    getPosts: (state) => {
      return state.post
    }
  },
  actions: {
    async fetchPosts() {
      const url =
        "https://facebook-data-api2.p.rapidapi.com/graph/v19.0/100025113282190/feed?fields=from%2Cid%2Ccreated_time%2Cmessage%2Cattachments%7Bmedia%2Ctarget%2Ctitle%2Ctype%2Curl%2Csubattachments.limit(100)%7D%2Ccomments.summary(total_count).limit(0)%2Creactions.summary(total_count).limit(0)%2Cshares";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "43e4097129msh7e165f48a2f595bp1476f9jsn484b839edf0c",
          "x-rapidapi-host": "facebook-data-api2.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        console.log("aa", data.data);
        this.post = data.data.map((post, index) => ({
          id: post.id || index + 1,
          platform_name: "Facebook",
          username: post.from ? post.from.name : "-",
          post_content: post.message || "-",
          post_date_time: post.created_time || "-",
          likes: post.likes || 0,
          comments: post.comments.count || 0,
          shares: post.reactions.summary.total_count || 0,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
