# Contributing to Modesto/retail-ui

## Fork the repository

- Go to Github and visit the [Modesto/retail-ui repo](https://github.com/28th-Floor/retail-ui)
- Click the *Fork* button in the upper-right corner
- Clone the *forked* repo (https://github.com/username/retail-ui.git *NOT* https://github.com/28th-Floor/retail-ui)

```
$ git clone https://github.com/username/retail-ui.git
```

## Set upstream repository

- Set the upstream to the original [Modesto/retail-ui repo](https://github.com/28th-Floor/retail-ui)

```
$ git remote add upstream https://github.com/28th-Floor/retail-ui
```

- This allows you to keep your forked repo up to date with the original repo via the following command:

```
$ git pull upstream branch-name
```

## Create a feature branch

- Create a feature branch using the `develop` branch as a base

```
$ git checkout develop
$ git pull upstream develop
$ git checkout -b feature-branch-name
```

- Commit your work to the feature branch


## Keeping feature branch up-to-date

- If upstream/develop has been updated since you created your feature branch, you'll want to update your feature branch to include those changes
- The preferred way to do this is via [Git Rebase](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
- First, fetch the latest commits from `upstream`. Then rebase to update the feature branch's history to include these commits:

```
$ git fetch upstream
$ git rebase upstream/develop
```

## Push feature branch to origin

- Push the feature branch to origin (your forked repo) when it is complete

```
$ git push --set-upstream origin feature-branch-name
```

## Submit a pull request

- Submit a pull request for your feature to be merged into the main modesto/retail-ui repo by visiting your forked repo in Github and clicking *Create pull request*
- All pull requests will be subject to a code review by a member of the Modesto/retail-ui team
- Feedback will be given and should be addressed in a timely manner, at which point another code review will take place
- If the pull request passes code review, it will be merged into the main [Modesto/retail-ui repo](https://github.com/28th-Floor/retail-ui)


## Addressing feedback on a pull request

- When addressing feedback on a pull request, there are a couple of potential workflows:
    - The preferred method is to make commits to the feature branch, then squash those commits and rebase (since such minor feedback commits are not generally vital to the history)
    - To squash the commits, first do a `git log` and copy the hash of the commit BEFORE your feedback commits

    ```
    $ git commit -m "Some feedback addressed"
    $ git log       // copy the proper commit hash from here
    $ git rebase -i commit-hash-goes-here
    ```

    - At this point, you should see an editor window listing all the commits since the commit hash you provided
    - Change `pick` to `f` for all but the first commit. This first commit will be the only remaining commit message in the history, and all subsequent commits will be squashed into it. Save and quit the editor.
    - You can now push the changes, but you may need to add a `-f` flag to `git push` since we've rebased and modified the history

    ```
    $ git push -f
    ```

- This process can also be used to squash features before submitting a pull request, but is not required, as that history is generally more valuable.

- A simpler way to address feedback on a pull request is simply to make commits to the feature branch and push to origin. The pull request will then automatically note that there are additional commits included in the pull request.

```
$ git commit -m "Some feedback addressed"
$ git push
```
