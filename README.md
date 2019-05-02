<p align="center">
  🍲React Webapp Boilerplate
  <br><br>
  <img src="http://s.4cdn.org/image/title/105.gif">
</p>

## Getting started
> You must have [npm](https://www.npmjs.com/package/download) installed globally before you begin.  
> You also must have a repo for your project on Possible Future’s Github.  
> If you don’t know how to do it or don’t have the access, ask your tech-lead.

#### 1. Download this project
Open Terminal and change the current working directory to the location where you want the cloned directory to be made.  
Then run:  
`git clone git@github.com:frenchbureau/react-webapp-boilerplate.git`

#### 2. Edit your directory name
Change the name of the boilerplate directory to the new project name you created on Step 0.

#### 3. Set up a new project origin
Next, `cd` into the project run the following in the command lines:  
```
git remote rm origin
git remote add origin [YOUR_PROJECT_ADDRESS]
git config master.remote origin
git config master.merge refs/heads/master
```

#### 4. Install dependencies
Next run in the command line:  
`npm install`

#### 5. Edit your project’s data
Finally, update the metadata and config defaults to how you want them for your project in <config.js>

## Motivation
We build lots of projects here at Possible Future and we don’t want to re-write all the basic stuff _each time_ (unless you’re a junior dev, otherwise... what are you doing here?)

## License
Do not share this boilerplate yet for it’s *not open-source*. We’re not really sure what to do with it.
