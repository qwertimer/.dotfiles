def build_experiment_folders(experiment_name=None):
"""
Allows user to input an experiment name and appends to the current working directory an experiment folder
if it doesnt exist and then places a log and checkpoint directory inside.

returns:
loggers : logger folder
chckpoints : checkpoint folder
experiment_name : name of experiment
"""

cwd = os.getcwd()
experiments = os.path.join(cwd, 'experiments')
if not os.path.exists(experiments):
os.mkdir(experiments)
#Check is experiment is being run from command line
if experiment_name is None:
experiment_name = input('Experiment Name')
exp_dir = os.path.join(experiments, experiment_name)

if not os.path.exists(exp_dir):
print(exp_dir)
os.makedirs(exp_dir)
loggrs = os.path.join(exp_dir, 'loggers')
if not os.path.exists(loggrs):
os.mkdir(loggrs)
chckpoints = os.path.join(exp_dir, 'checkpoints')
if not os.path.exists(chckpoints):
os.mkdir(chckpoints)
