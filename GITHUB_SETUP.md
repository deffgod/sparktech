# GitHub Repository Setup Guide

This guide will help you set up the SparkTech Trading Website repository on GitHub.

## 🚀 Quick Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - **Repository name**: `sparktech-trading-website`
   - **Description**: `Modern corporate website for SparkTech Trading FZCO - Dubai-based international trading company`
   - **Visibility**: Choose Public or Private
   - **Initialize**: Do NOT initialize with README, .gitignore, or license (we already have these)

### 2. Connect Local Repository to GitHub

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/sparktech-trading-website.git

# Push the code to GitHub
git push -u origin main
```

### 3. Configure Repository Settings

#### Repository Settings
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Configure the following:

**General:**
- Enable Issues
- Enable Projects
- Enable Wiki (optional)
- Enable Discussions (optional)

**Branches:**
- Set `main` as the default branch
- Add branch protection rules for `main`:
  - Require pull request reviews
  - Require status checks to pass
  - Require branches to be up to date

**Security:**
- Enable Dependabot alerts
- Enable Dependabot security updates
- Enable Code scanning

### 4. Set Up GitHub Actions Secrets

For automatic deployment to Vercel, add these secrets in Settings > Secrets and variables > Actions:

- `VERCEL_TOKEN`: Your Vercel API token
- `ORG_ID`: Your Vercel organization ID
- `PROJECT_ID`: Your Vercel project ID

### 5. Configure Vercel Integration

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure environment variables in Vercel dashboard
4. Enable automatic deployments

## 📋 Repository Features

### ✅ What's Included

- **Complete Next.js 14 website** with modern architecture
- **TypeScript** implementation with full type safety
- **Responsive design** with Tailwind CSS
- **GitHub Actions** for CI/CD
- **Issue templates** for bug reports and feature requests
- **Pull request template** for consistent contributions
- **Comprehensive documentation** (README.md, DEPLOYMENT.md)
- **Environment configuration** (.env.example)
- **Security** with dependency auditing

### 🔧 GitHub Actions Workflows

1. **CI Pipeline** (`.github/workflows/ci.yml`):
   - Runs on push and pull requests
   - Tests on Node.js 18.x and 20.x
   - Type checking, linting, and building
   - Security auditing

2. **Deploy Pipeline** (`.github/workflows/deploy.yml`):
   - Automatic deployment to Vercel
   - Runs on push to main branch
   - Manual deployment trigger available

### 📝 Issue Templates

- **Bug Report**: Structured template for reporting bugs
- **Feature Request**: Template for suggesting new features

### 🔒 Security Features

- Dependency vulnerability scanning
- Automated security updates with Dependabot
- Code scanning capabilities
- Branch protection rules

## 🎯 Next Steps

1. **Update README.md**: Replace `your-username` with your actual GitHub username
2. **Configure Environment Variables**: Set up your actual values in Vercel
3. **Customize Content**: Update company information and branding
4. **Add Images**: Replace placeholder images with actual company photos
5. **Test Deployment**: Verify everything works in production

## 📞 Support

If you need help with the setup:
- Check the [GitHub documentation](https://docs.github.com/)
- Review the [Vercel documentation](https://vercel.com/docs)
- Contact your development team

---

**Repository URL**: `https://github.com/YOUR_USERNAME/sparktech-trading-website`

**Live Site**: `https://your-domain.vercel.app` (after deployment)
