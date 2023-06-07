# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and fun ctionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This line is labelling the class 'BlogPostController' and defines a class that can utilize methods and behavior defined in a parent class Application Controller, Inheritance
class BlogPostsController < ApplicationController
  def index
    # ---2) This line is creating an instance variable, known as the post variable, that will store all of the BlogPost data and display the list
    @posts = BlogPost.all
  end

  # ---3) This lines shows a controller method that is called show
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This line is a method to display a form for user (to create a post)
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) this line is assigning a new BlogPost instance called blog_post_params to the post variable. BlogPost is followed by the .create method that is followed by parameters that give the code a bit of information
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This line is assigning a BlogPost that has a specific parameter, such as id that is found through the method .find and is passed in with parameters of :id; once these are found, they are assigned to the variable post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The instance variable is using a GET request method called .update to modify the object by using the parameter passed of blog_post_params. This will update the variable post, in the database
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This line of code will redirect the user to a different path, which might be a page that displays all blog posts
      redirect_to blog_posts_path
    end
  end

  # ---9) Private means that it can only be accessed by methods that use the same class or within the class itself. It cannot be called from another method/class outside of it
  private
  def blog_post_params
    # ---10) This line of code is using the .require method to assign a key called :blog_post to use the method .permit's parameters, which are they keys of :title and :content.
    params.require(:blog_post).permit(:title, :content)
  end
end
