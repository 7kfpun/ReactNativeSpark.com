import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentMail from 'material-ui/svg-icons/content/mail';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const styles = {
  container: {
    fontFamily: 'Lato,sans-serif',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#263238',
    opacity: 0.8,
    position: 'fixed',
    textAlign: 'left',
  },
  mainBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(images/machine.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: 300,
    paddingBottom: 300,
    paddingLeft: 40,
    paddingRight: 40,
  },
  mainBlockText: {
    fontSize: 42,
    color: 'white',
    lineHeight: '72px',
  },
  mainBlockTextSmall: {
    fontSize: 24,
    color: 'white',
    lineHeight: '42px',
  },
  contactButton: {
    height: 50,
    width:140,
    margin: 30,
  },
  aboutBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 160,
    paddingRight: 160,
    marginBottom: 30,
  },
  aboutText: {
    fontSize: 20,
    lineHeight: 2,
  },
  developBlock: {
    display: 'inline-block',
    backgroundColor: '#FFF',
    verticalAlign: 'middle',
  },
  developCard: {
    width: 270,
    textAlign: 'center',
    float:'left',
    margin: 20,
  },
  developCardIcon: {
    fontSize: 56,
    marginTop: 32,
  },
  developCardText: {
    height: 150,
  },
  reactNativeImageBlock: {
    backgroundImage: 'url(images/react-native.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 300,
    marginTop: 30,
  },
  recentProjectBlock: {
    display: 'flex',
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    marginTop: 30,
    marginBottom: 30,
  },
  recentProjectText: {
    fontSize: 22,
  },
  projectBlock: {
    display: 'inline-block',
    backgroundColor: '#FFF',
    verticalAlign: 'middle',
  },
  projectCard: {
    width: 270,
    textAlign: 'left',
    float:'left',
    margin: 20,
  },
  projectCardText: {
    height: 60,
  },
  cardImage: {
    height: 160,
  },
  whyReactNativeBlock: {
    display: 'flex',
    height: 320,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  whyReactNativeText: {
    fontSize: 22,
    lineHeight: 2,
  },
  footer: {
    textAlign: 'left',
    height: 200,
    backgroundColor: '#FAFAFA',
    padding: 40,
  },
  footerText: {
    color: '#9E9E9E',
    fontSize: 14,
    lineHeight: '24px',
  },
  footerContactIcon: {
    marginRight: 24,
  },
  floatingAction: {
    position: 'fixed',
    bottom: 45,
    right: 24,
  },
};

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <AppBar
            style={styles.header}
            title="React Native Spark"
            iconElementLeft={<div style={{width: 60}}></div>}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText="English" />
                <MenuItem primaryText="中文" disabled={true}/>
                <MenuItem
                  linkButton={true}
                  href="mailto:hey@frontn.com"
                  primaryText="Contact us!" />
              </IconMenu>
            }
          />

          <FloatingActionButton
            linkButton={true}
            href="mailto:hey@frontn.com"
            style={styles.floatingAction}
          >
            <ContentMail />
          </FloatingActionButton>

          <div style={styles.mainBlock}>
            <div style={styles.mainBlockText}>Premium App Development Services</div>
            <div style={styles.mainBlockTextSmall}>
              Provide you comprehensive cross-platform app development services with React Native.
            </div>
            <div>
              <RaisedButton
                label="CONTACT US!"
                linkButton={true}
                href="mailto:hey@frontn.com"
                primary={true}
                style={styles.contactButton}
              />
            </div>
          </div>

          <div style={styles.aboutBlock}>
            <p style={styles.aboutText}>
              ReactNativeSpark is a Hong Kong based premium mobile apps development & consultancy
              team under the managment of <a href="https://www.frontn.com">Frontn Ltd</a>. We provide
              advanced solutions with the React Native to clients around the world.
            </p>
          </div>

          <div style={styles.developBlock}>
            <div style={styles.developBlock}>
              <div style={styles.developCard}>
                <Card>
                  <FontIcon className="fa fa-edit" style={styles.developCardIcon} />
                  <CardTitle title="Prototyping" subtitle="Understand your goal and ideas" />
                  <CardText style={styles.developCardText}>
                    Testing your ideas and knowing your user before you build your app will help
                    you make strategic decisions from the beginning. And it will make the design
                    process easier and save time and money, and improve success rate.
                  </CardText>
                </Card>
              </div>
            </div>

            <div style={styles.developBlock}>
              <div style={styles.developCard}>
                <Card>
                  <FontIcon className="fa fa-gears" style={styles.developCardIcon} />
                  <CardTitle title="Create" subtitle="Build fast with high quality" />
                  <CardText style={styles.developCardText}>
                    High quality cross-platform mobile apps development with the most modern technologies.
                    Create apps that can be delivered very quickly to catch up the market trends.
                  </CardText>
                </Card>
              </div>
            </div>
          </div>

          <div style={styles.developBlock}>
            <div style={styles.developBlock}>
              <div style={styles.developCard}>
                <Card>
                  <FontIcon className="fa fa-cloud-upload" style={styles.developCardIcon} />
                  <CardTitle title="Deploy and Maintain" subtitle="Apple store and Google play" />
                  <CardText style={styles.developCardText}>
                    We help deploying your apps to the world with continuous delivery approach aiming at
                    building, testing, and releasing software faster and more frequently.
                  </CardText>
                </Card>
              </div>
            </div>

            <div style={styles.developBlock}>
              <div style={styles.developCard}>
                <Card>
                  <FontIcon className="fa fa-support" style={styles.developCardIcon} />
                  <CardTitle title="Gain more customers" subtitle="Analyse your customers" />
                  <CardText style={styles.developCardText}>
                    We help you to shape your apps to meet the markets. By gathering customer feedback
                    we can help identifing your customers that are not 100% happy and making your apps
                    better.
                  </CardText>
                </Card>
              </div>
            </div>
          </div>

          <div style={styles.recentProjectBlock}>
            <p style={styles.recentProjectText}>
              <b>Recent Projects</b>
            </p>
          </div>

          <div style={styles.projectBlock}>
            <div style={styles.projectBlock}>
              <div style={styles.projectCard}>
                <Card>
                  <CardMedia
                    overlay={<CardTitle title="Sylinghim" subtitle="施凌部署環球市況分析" />}
                  >
                    <img style={styles.cardImage} src="images/sylinghim.png" />
                  </CardMedia>
                  <CardText style={styles.projectCardText}>
                    <p>Get daily information about the Hong Kong and global markets with push notification and subscription payment.</p>
                  </CardText>
                  <CardText style={{height: 6}} />
                  <CardActions>
                    <FlatButton
                      label="App Store"
                      linkButton={true}
                      href="https://itunes.apple.com/us/app/sylinghim-shi-ling-bu-shu/id1069282588?mt=8"
                      icon={<FontIcon className="fa fa-apple" />}
                    />
                    <FlatButton
                      label="Google Play"
                      linkButton={true}
                      href="https://play.google.com/store/apps/details?id=com.share.sylinghim_sencha_app"
                      icon={<FontIcon className="fa fa-android" />}
                    />
                  </CardActions>
                </Card>
              </div>
            </div>

            <div style={styles.projectBlock}>
              <div style={styles.projectCard}>
                <Card>
                  <CardMedia
                    overlay={<CardTitle title="Finance" subtitle="Track stocks portfolio & the market" />}
                  >
                    <img style={styles.cardImage} src="images/finance.jpg" />
                  </CardMedia>
                  <CardText style={styles.projectCardText}>
                    <p>iOS&#39;s Stocks App clone written in React Native. Data is pulled from Yahoo Finance.</p>
                  </CardText>
                  <CardText style={{height: 6}} />
                  <CardActions>
                    <FlatButton
                      label="GitHub"
                      linkButton={true}
                      href="https://github.com/7kfpun/FinanceReactNative"
                      icon={<FontIcon className="fa fa-github" />}
                    />
                    <FlatButton
                      label="Google Play"
                      linkButton={true}
                      href="https://play.google.com/store/apps/details?id=com.kfpun.finance"
                      icon={<FontIcon className="fa fa-android" />}
                    />
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>

          <div style={styles.projectBlock}>
            <div style={styles.projectBlock}>
              <div style={styles.projectCard}>
                <Card>
                  <CardMedia
                    overlay={<CardTitle title="Bitcoin Calculator" subtitle="Check the price in any currencies" />}
                  >
                    <img style={styles.cardImage} src="images/bitcoin.jpg" />
                  </CardMedia>
                  <CardText style={styles.projectCardText}>
                    <p>Bitcoin Calculator App for checking bitcoin&#39;s prices in any currencies. Data is pulled
                    from Bitcoin Average.</p>
                  </CardText>
                  <CardActions>
                    <FlatButton
                      label="GitHub"
                      linkButton={true}
                      href="https://github.com/7kfpun/BitcoinReactNative"
                      icon={<FontIcon className="fa fa-github" />}
                    />
                    <FlatButton
                      label="App Store"
                      linkButton={true}
                      href="https://itunes.apple.com/us/app/bitcoin-calculator/id1123557731?mt=8"
                      icon={<FontIcon className="fa fa-apple" />}
                    />
                    <FlatButton
                      label="Google Play"
                      linkButton={true}
                      href="https://play.google.com/store/apps/details?id=com.kfpun.bitcoin"
                      icon={<FontIcon className="fa fa-android" />}
                    />
                  </CardActions>
                </Card>
              </div>
            </div>

            <div style={styles.projectBlock}>
              <div style={styles.projectCard}>
                <Card>
                  <CardMedia
                    overlay={<CardTitle title="Thai vocabulary" subtitle="Learn and review vocabulary" />}
                  >
                    <img style={styles.cardImage} src="images/vocab.jpg" />
                  </CardMedia>
                  <CardText style={styles.projectCardText}>
                    <p>Thai Vocabulary Learning App for learning and reviewing Thai vocabulary.</p>
                  </CardText>
                  <CardActions>
                    <FlatButton
                      label="GitHub"
                      linkButton={true}
                      href="https://github.com/thaiinhk/VocabReactNative"
                      icon={<FontIcon className="fa fa-github" />}
                    />
                    <FlatButton
                      label="App Store"
                      linkButton={true}
                      href="https://itunes.apple.com/us/app/vocab/id1116896895?mt=8"
                      icon={<FontIcon className="fa fa-apple" />}
                    />
                    <FlatButton
                      label="Google Play"
                      linkButton={true}
                      href="https://play.google.com/store/apps/details?id=com.thaiinhk.vocab"
                      icon={<FontIcon className="fa fa-android" />}
                    />
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>

          <div style={styles.reactNativeImageBlock}></div>

          <div style={styles.whyReactNativeBlock}>
            <p style={styles.whyReactNativeText}>
              <b>Why React Native?</b>
              <p>React Native makes your life easier.</p>
              <p>Faster time to market.</p>
              <p>One team, full stack.</p>
            </p>
          </div>

          <div style={styles.footer}>
            <p style={styles.footerText}>Copyright 2016 ReactNativeSpark.com. All Rights Reserved.</p>
            <p style={styles.footerText}>Create digital services that people love.</p>
            <p style={styles.footerText}>
            </p>
            <div>
              <a href="https://www.facebook.com/frontnpage/"><FontIcon className="fa fa-facebook-official" style={styles.footerContactIcon}></FontIcon></a>
              <a href="https://plus.google.com/+frontn"><FontIcon className="fa fa-google-plus" style={styles.footerContactIcon}></FontIcon></a>
              <a href="http://www.linkedin.com/company/front-n"><FontIcon className="fa fa-linkedin" style={styles.footerContactIcon}></FontIcon></a>
              <a href="mailto:hey@frontn.com" target="_top"><FontIcon className="fa fa-envelope-o" style={styles.footerContactIcon}></FontIcon></a>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
