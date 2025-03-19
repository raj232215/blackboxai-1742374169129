import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  School as SchoolIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  OndemandVideo as VideoIcon,
  Quiz as QuizIcon,
  MenuBook as BookIcon,
} from '@mui/icons-material';

const courses = [
  {
    title: "Personal Safety Basics",
    description: "Learn fundamental personal safety techniques and awareness strategies.",
    duration: "2 hours",
    modules: [
      "Understanding Your Environment",
      "Basic Self-Defense Techniques",
      "Emergency Response Protocols",
      "Safety Tools and Equipment",
    ],
    progress: 75,
  },
  {
    title: "Digital Safety",
    description: "Protect yourself online and understand digital security measures.",
    duration: "1.5 hours",
    modules: [
      "Online Privacy Basics",
      "Social Media Safety",
      "Secure Communication",
      "Digital Footprint Management",
    ],
    progress: 30,
  },
];

const videos = [
  {
    title: "Self-Defense Basics",
    duration: "15:00",
    thumbnail: "https://source.unsplash.com/random/800x400/?self-defense",
    description: "Learn basic self-defense moves and techniques.",
  },
  {
    title: "Emergency Response",
    duration: "12:30",
    thumbnail: "https://source.unsplash.com/random/800x400/?emergency",
    description: "How to respond in various emergency situations.",
  },
];

const quizzes = [
  {
    title: "Safety Awareness Quiz",
    questions: 10,
    difficulty: "Beginner",
    description: "Test your knowledge of basic safety principles.",
  },
  {
    title: "Emergency Response Assessment",
    questions: 15,
    difficulty: "Intermediate",
    description: "Evaluate your emergency response knowledge.",
  },
];

const EducationalTools = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Educational Tools
      </Typography>

      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<SchoolIcon />} label="Courses" />
          <Tab icon={<VideoIcon />} label="Video Tutorials" />
          <Tab icon={<QuizIcon />} label="Quizzes" />
        </Tabs>
      </Paper>

      {/* Courses Tab */}
      {tabValue === 0 && (
        <Grid container spacing={3}>
          {courses.map((course, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {course.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {course.duration}
                  </Typography>
                  <Box sx={{ mt: 2, mb: 1 }}>
                    <LinearProgress variant="determinate" value={course.progress} />
                  </Box>
                  <Typography variant="body2" color="text.secondary" align="right">
                    Progress: {course.progress}%
                  </Typography>
                  <Accordion sx={{ mt: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>Course Modules</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List dense>
                        {course.modules.map((module, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <CheckCircleIcon color={idx < course.progress / 25 ? "success" : "disabled"} />
                            </ListItemIcon>
                            <ListItemText primary={module} />
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PlayIcon />}
                    sx={{ mt: 2 }}
                    fullWidth
                  >
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Video Tutorials Tab */}
      {tabValue === 1 && (
        <Grid container spacing={3}>
          {videos.map((video, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={video.thumbnail}
                  alt={video.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {video.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {video.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {video.duration}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PlayIcon />}
                    sx={{ mt: 2 }}
                    fullWidth
                  >
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Quizzes Tab */}
      {tabValue === 2 && (
        <Grid container spacing={3}>
          {quizzes.map((quiz, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {quiz.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {quiz.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Questions: {quiz.questions}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Difficulty: {quiz.difficulty}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<QuizIcon />}
                    fullWidth
                  >
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default EducationalTools;
