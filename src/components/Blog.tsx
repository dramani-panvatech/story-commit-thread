import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "What to Do After a Car Accident",
      excerpt: "Essential steps to protect yourself legally and financially after an auto accident. Learn what documentation you need and how to handle insurance companies.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Personal Injury",
      image: "🚗"
    },
    {
      title: "Understanding Custody Rights",
      excerpt: "A comprehensive guide to child custody laws, different types of custody arrangements, and how to protect your parental rights during divorce proceedings.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Family Law",
      image: "👨‍👩‍👧‍👦"
    },
    {
      title: "How to Choose the Right Attorney",
      excerpt: "Key factors to consider when selecting legal representation. Learn what questions to ask and red flags to watch out for when hiring a lawyer.",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Legal Advice",
      image: "⚖️"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-24 h-1 bg-accent rounded-full"></div>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground text-sm font-bold">📚</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Legal Insights &<br />
            <span className="text-accent">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert analysis, practical guidance, and the latest developments 
            in law that directly impact you and your business.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto mb-16">
          {/* Featured Article */}
          <article className="lg:col-span-7 bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-floating transition-all duration-500 border border-border/30 group">
            <div className="relative h-64 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                  Featured
                </span>
              </div>
              <div className="absolute bottom-6 right-6 text-6xl opacity-30">
                {blogPosts[0].image}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <span className="font-medium">{blogPosts[0].category}</span>
                <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <button className="inline-flex items-center bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:bg-accent-light transition-all duration-300 group/btn">
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>

          {/* Side Articles */}
          <div className="lg:col-span-5 space-y-6">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index + 1}
                className="bg-card rounded-2xl p-6 border border-border/30 hover:border-accent/30 transition-all duration-300 group hover:shadow-soft"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center text-2xl">
                    {post.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-2">
                      <span className="bg-muted px-2 py-1 rounded-md font-medium">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <button className="text-accent hover:text-accent-light font-semibold text-sm transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card rounded-3xl border border-border/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Informed</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest legal insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light"
              >
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;