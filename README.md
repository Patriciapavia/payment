

# To run the project
Navidate to root directory run `npm run json-server` to start the json server then on the same directory run `npm run dev` to start the react app.


# The challenge

- The first challenge is the first bill page, since it doesn't have much information. I decided to create some dummy JSON data, assuming that when users land on this page, they have a list of bills to pay and they can select one of them to pay. Each bill will include  due date and amount so when user select it, it will land on the second page, which is the payment page

- Payment page. The challenge is that since I am not connected to the BE, I am unable to fetch or update data, so I decide to use a method to calculate based on how it should be, but it is not very good to have this logic on the front end; all this payment calculating logic should be coming from the BE.

- payment review page the challenge is I have to display a list of schedule base on what user slect the plan and display each schedule but i dont have the data so I decide to ccreate dummy array base on previous page anfd make and estimated of each type plan and display it on the review page.

# What I could imorove

- currently the app got no validation or custom error message so I could improve that by adding some validation and custom error message. to show a proper message to the user.
- also need a unit test